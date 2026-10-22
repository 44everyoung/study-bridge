import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader
root=Path(__file__).resolve().parents[1]
import os
font_sets=[(Path('/System/Library/Fonts/Supplemental'),['Arial.ttf','Arial Bold.ttf','Georgia.ttf']),(Path('/usr/share/fonts/truetype/dejavu'),['DejaVuSans.ttf','DejaVuSans-Bold.ttf','DejaVuSerif.ttf']),(Path(os.environ.get('WINDIR','C:/Windows'))/'Fonts',['arial.ttf','arialbd.ttf','georgia.ttf'])]
for font_dir,files in font_sets:
 if all((font_dir/f).exists() for f in files):break
else:raise RuntimeError('Install DejaVu fonts or configure font_sets in tools/build_notes.py.')
for name,file in zip(['Body','Bold','Display'],files):pdfmetrics.registerFont(TTFont(name,str(font_dir/file)))
notes=json.loads((root/'notes-data.json').read_text(encoding='utf-8'))
(root/'notes-data.js').write_text('window.NOTES = '+json.dumps(notes,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
blue=HexColor('#32658e'); ink=HexColor('#213e56'); muted=HexColor('#5b7080')
styles={
 'tag':ParagraphStyle('tag',fontName='Bold',fontSize=8.5,leading=12,textColor=blue,spaceAfter=12),
 'title':ParagraphStyle('title',fontName='Display',fontSize=27,leading=33,textColor=ink,spaceAfter=10),
 'sub':ParagraphStyle('sub',fontName='Body',fontSize=11,leading=16,textColor=muted,spaceAfter=17),
 'h':ParagraphStyle('h',fontName='Bold',fontSize=12,leading=16,textColor=ink,spaceBefore=12,spaceAfter=6),
 'body':ParagraphStyle('body',fontName='Body',fontSize=10.2,leading=15.5,textColor=ink,spaceAfter=9),
 'small':ParagraphStyle('small',fontName='Body',fontSize=8,leading=11.5,textColor=muted,spaceAfter=5),
 'box':ParagraphStyle('box',fontName='Body',fontSize=10,leading=15,textColor=ink,backColor=HexColor('#edf7fe'),borderPadding=12,spaceBefore=12,spaceAfter=15),
}
def clean(t):
 t=escape(t.replace('–','-').replace('—','-').replace('’',"'").replace('“','"').replace('”','"').replace('→',' -> ').replace('⇌',' <=> '))
 for symbol,digit in zip('₀₁₂₃₄₅₆₇₈₉','0123456789'):t=t.replace(symbol,'<sub>'+digit+'</sub>')
 for symbol,digit in zip('⁰¹²³⁴⁵⁶⁷⁸⁹','0123456789'):t=t.replace(symbol,'<super>'+digit+'</super>')
 return t
def para(t,style='body'):return Paragraph(clean(t),styles[style])
def footer(c,doc):
 c.setStrokeColor(HexColor('#dce7ee'));c.line(44,755,568,755)
 c.setFont('Bold',10);c.setFillColor(blue);c.drawString(44,768,'STUDY BRIDGE')
 c.setFont('Body',8);c.setFillColor(muted);c.drawRightString(568,768,'FREE TOPIC NOTES')
 c.line(44,43,568,43);c.setFont('Body',7.5);c.drawString(44,29,'Study Bridge  |  @studybridgeca  |  Personal and classroom learning')
 c.drawRightString(568,29,f'{doc.page} / 2')
for n in json.loads((root/'notes-data.json').read_text()):
 path=root/n['pdf'];doc=SimpleDocTemplate(str(path),pagesize=(612,792),rightMargin=44,leftMargin=44,topMargin=55,bottomMargin=57,title=n['title']+' | Study Bridge',author='Study Bridge')
 grade='AP' if n['track']=='AP' else 'BC Grade '+' / '.join(map(str,n['grades']))
 story=[para(n['subject'].upper()+'  /  '+grade.upper(),'tag'),para(n['title'],'title'),para(n['summary'],'sub'),para(n['course'],'small')]
 for i,(h,b) in enumerate(n['concepts'],1):story.append(KeepTogether([para(f'0{i}  {h}','h'),para(b)]))
 story += [para('Worked example','h'),para(n['example'][0],'body'),para(n['example'][1],'box'),para('Watch out: '+n['mistake'],'small'),PageBreak(),para(n['subject'].upper()+'  /  '+grade.upper(),'tag'),para('Try it. Then check it.','title'),para('Work through these questions before looking at the answers.','sub')]
 for i,q in enumerate(n['questions'],1):story += [para(f'{i}. {q}'),Spacer(1,12)]
 story += [para('Answer key','h')]
 for i,a in enumerate(n['answers'],1):story += [para(f'{i}. {a}')]
 story += [Spacer(1,12),para('One-minute recap','h'),para('Close the notes. Explain one key idea in your own words, then retry the question you found most difficult.','body'),para('About this guide','h'),para('Original Study Bridge topic review prepared with AI assistance. Suggested course fit, not complete or official course coverage. Compare with your teacher’s materials. Examples and practice questions are newly written.','small'),Paragraph(f'<font color="#32658e"><link href="{n["source"]}">Official course context: {clean(n["course"])}</link></font>',styles['small']),para('Questions or corrections: ivyystudyy@gmail.com','small')]
 doc.build(story,onFirstPage=footer,onLaterPages=footer)
 reader=PdfReader(str(path));assert len(reader.pages)==2,(n['id'],len(reader.pages))
 assert all(len(p.extract_text())>200 for p in reader.pages)
 print(n['id'],len(reader.pages),'pages')

# Keep the full collection in sync with the individual downloads.
from pypdf import PdfWriter
collection=PdfWriter()
for note in notes:
 collection.append(str(root/note['pdf']),outline_item=note['subject']+' | '+note['title'])
collection.add_metadata({'/Title':'Study Bridge | Notes Collection','/Author':'Study Bridge'})
with open(root/'notes/study-bridge-collection.pdf','wb') as output:
 collection.write(output)
print('Collection:',len(collection.pages),'pages')
