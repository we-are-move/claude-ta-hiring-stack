// output_builder.js
// Builds a branded Move Word document (.docx) from a JSON content config.
// Self-contained: the Move logo is embedded as base64 inside this file.
//
// Usage:
//   node output_builder.js <config.json> <output.docx>
//
// Config JSON schema:
//   {
//     "role": "Senior Backend Engineer",
//     "company": "[Company]",
//     "methodology_blurb": "...",          // full blurb text, WEDGE and TARGET_PERSONA substituted
//     "touches": [
//       { "title": "The Hook", "day": "Day 1", "subjects": ["v1","v2","v3"], "body": "..." },
//       { "title": "The Contrarian Frame", "day": "Day 4 to 5", "subjects": [...], "body": "..." },
//       { "title": "Day-to-Day Reality", "day": "Day 9 to 10", "subjects": [...], "body": "..." },
//       { "title": "Why Now and Honest Close", "day": "Day 14 to 17", "subjects": [...], "body": "..." }
//     ],
//     "linkedin_dm": "..."
//   }

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  ImageRun, Footer, AlignmentType, LevelFormat, ExternalHyperlink,
  HeadingLevel, BorderStyle, WidthType, ShadingType, PageBreak,
} = require('docx');

// =========================================================================
// BRAND (DO NOT EDIT)
// =========================================================================
const BRAND = { black: '000000', white: 'FFFFFF', cream: 'FFEDD7', lavender: 'D6C6F4', greyText: '444444', ctaBg: '000000', ctaText: 'FFFFFF' };
const WEBSITE = 'https://www.wearemove.com';
const CALENDLY = 'https://calendly.com/adriano-herdman/discovery-call-move-services';
const PAGE_W = 12240, PAGE_H = 15840, MARGIN = 1440, CW = PAGE_W - (MARGIN * 2);

// =========================================================================
// EMBEDDED MOVE LOGO (base64, no external file needed)
// =========================================================================
const MOVE_LOGO_BASE64 = '/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCACmAWQDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBgkDBAUCAf/EAD0QAAEDAwIEAwYEBAUEAwAAAAEAAgMEBREGBwgSITETQVEUImGBkaEjMrHBFjNCYhUkUnKxQ0SCkqKzwv/EABgBAQEBAQEAAAAAAAAAAAAAAAADAgEE/8QAIREBAAICAgMBAAMAAAAAAAAAAAECAxESISIxMkFTQlH/2gAMAwEAAhEDEQA/ALloiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiEgDJOAgIsWuO4ejbfWeyVOoKAS5wQJ2nlPx69F7dmvFqvMDp7VcaWtjacOdBK14afQ4PRd1I7yIi4C4a2qpqKlkqqyeKngjHM+SRwa1o9ST2XMTgZKqJxabpuu1edH2KtPscBxVujd0kd6ZHcYPZarWbS5M6WMZuZod9YaUajoA8HGTO3l+uVlFBWUtfSR1dFUxVNPIMslieHNcPgR0K1gHGSfNX44X2TN2YsZkdljoiYx6DncqZMcVje3K22k5ERRaEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAPQZVZ+Jre00Jn0hpWp/HILKyqYfy/2tI8+3UFZ9xLbkN0PpN1HRPH+LV7C2Hr1jb19/6jCo/Tw196uzYoWS1VbVP6BoLnPcfgr4ccTO5YtbXTqzySTSPlme98rjzOcTkuP6qfeCi6z0+vq22meT2aekLvD5jy8/M0Zx64UI6ltE9jvM9rqciWEgO6YwSAf3Uu8GkDpt0pHjtHSFx/8AYK14jjKdJnkuwiL5le2ON0j3BrWjJJXiXRrxFa8ZojQdQ+nla25VbTFSjPVpP9WPToqE1Ez6iolnkdzPkcXOJ8yVI/EXrqbW2vqh0UubfQuMNIMY93uSfnlRp65XsxU4wje25fUbeZ4b6kLY1tFYzpzbeyWcu5jT0w6/7iXfuqG7SWWPUW49is9QxzoKmqayTHkFsYpomwU0UDfyxsDB+gGFLNP41jhyIiKCgiIgIiICL8cQ1pcTgDqV5enNQWzUEdRLbJvGjgk8Nzx2J+B80Hqosd3C1fatFacnvN0lAZGPcZnq8+gUA27isYbi5tbpwtpC73XNmyQPXGFqKzPpyZiFoEWPaC1jY9a2SO62OqE0Th7zT0ew+hHcLIVl0REQEREBERAREQEREBERAREQEREBERAREQEREBdW7V9Na7bUXCslbFTwML5HuOAAu0q88ZuuDatNwaTo5i2puTS6fAz+F1BHwOcLVY5TpyZ0rfu/rCp1trivu0zn+B4hZTxl5IjaOmB8CRn5qdeEDbgw082t7vTt5i0toWubn3f9fwOQQq76BsM+p9XW6ywN96pmDCfQeq2C1go9IbeyeG1sNPb6TsBgDp1+5V8s8YisMV7nbX7uLcn3XW11rn9XS1Dh9On7KX+CGB7txblPynkbQObn48zVBN2l8a6VUwxh8znDHxJVpeBegY6zX25Fo8RlS2EH4FgK3k6xs1+lmFDfFXrv+FNCPtlHMGXC5gxNw7DmMOffHn3GFMM8rIIXzSuDWMGXEnAAWvzfrWs2t9wqysa8voqd5hpGkY5Wef3yvPjryspadQwB5c95e5xcSckn1X4O/wCi7FdTPpTG2To4jJHouv3weg6r2ekFgeCnTzq3WdbfJoA+CkhLGPI/LLkEY+SuKoU4PLC607YC4Pxm6S+OOnkMt/ZcW9G/tJoTVDLFQWwXKaJuao+LyeGf9PY+WCvHfd79L16hOCLA9pt0tO7h28vt03gV0XSelkOHNP8Abn8w7dVnixMaaeTqDUtisDQbvdaSjcW87WSyta5w9QCcleNpfcrRuo7gaC2XmB9TzcjY3uDS8+jevX5KnvFRdZrlu7cYnVfjw0rhHCAchjcAkD55UcWC41dpvdHdKCXw6mnmD43D+k+qvGGJrtOb6ls4RdSzTGotNHO53MXwMcT6ktC7E8rIYXyyODWMGXEnAAXnURVxN69/g3QktPSSAXK4DwoQH4cwHPv47+WF3+HSgbatoLTPUAxzTxOmnLunXmd1Kq9uXf67dnemChoX89MKj2Wia4cuG5yc/PKn/iR1U3RG00VmoXNira2FtMxsbuV0Y5erhj4hVmmoiP8AWd/qvHEhuLU611pNTU1Q42qhJjp2joHepI9c56rC9vtK3DWWqqWxW1p55nAOkxkMb/qPoF4DnOcXPflxJyT6lWX4ULfQ6Y0ff9xLwx0LIWFkTu/NHgEkDzOQvROscdJx5T2+OH+jl2/39uujTXPqIPCEXTo1zzynmxnGfJWxVROGI1Wr97rtqesa+QNY6US8uG8wcAB+uFbp7msaXPcGtHck9AvNk9qV9P1EBBGQchFNoREQEREBERAREQEREBERAREQEREBERAREQcVXPHTU0lRM9rI42lznOOAAtdm7+qJtX7gXS8Pc8RPmLYY3OLgxo6dPQdMq3vFXqn+HNraumjcRPc/8qwtdhzMgnm+yoockknuTklejDH6lkn8WH4K9M+26orNQTwh0NIzkjefKToR9lYXf6QR7OanOcE0LgPqFj3Cnp9ll2poqrlxLcfx5AR2IJb+y7XFBWey7Q3VmcePGY1i08rtx1ChRyXZ+Ku1wdWQ2vbA1xPS5yicfIcv7Kk8bHSPaxoJJdjothWxFDJadobBR1DDG+KmJcD5Zc4/uq5p60nj9yxfiu1r/DG3k1tppMV1zBhaGvw9jTn3x59xhVR2Y0lLrTXtFbXteYPE56hwGeVvmSvV4jtaP1luNVPim8SgoSYKXpj3e5z88qceD3R3+EaTrdWVsXLLWNIp3Z/6WOv3C5HhTbW92V13rpaSi3Lu1DQ9KankbGz9OUfusRpYjNURxNGS9waAvT1nVur9VXOrkdzukqX9T8Dj9l62ztobfNy7DbZW5ilq2h/+3qq/12nryXeoJaLbjZiOoeHOp7XQeIQO5z1//SoLqS61N7vtZdauR0stTKXue49SPL7YVsOM6/ttmhLdp2nqXRz1LwXsacc0IBBz8wFUBjTJI2MD8xwpYY/s3ed9Pc0zcL9paqpdS2uSSmdHKGteCcP88EeYVoa/iJt1RtxHLa4pZNSzs8IU4iJDZPX4jp91F2+2m4tLbY6RtzmBlQ+HxJyP6iXOwfoQpD4ONNaduWnau91NsimrqeYRNfK0OGCM5AI7/FMnGY27WJjpVy/vuEl2qJroJW1cri+QSA82T65XSYfxGn+4KQuI9jI95NQQRtDI2TABrRgAcjVHre4OOxVuUahOfbZFtlVmu0FZ6onPPTD7dP2UdcWWuf4Z0G+z0kvLX3RpjHK7DmR9cuHn3GFlux1VG3ZyxVU0jWsbSlznOOAAHOVNd9dZT643Fq6tj3OpIZDDRtI/K3zH1yvLjrysra2oZ9wa6SN21lUalq4fEp7ePw5ObtN0I+xK8Li21PLfd06i2k4htLfZoy09HZw7P3VnNh9Jt0ZtdSwSxNirZ4vGqiDkF3XB+mFRPVVXUV+pLjV1MhkmfUv5nOPfBIH/AAq0jneZ/wAZt41eb1JHTHzUl3vXNyvWirLtzYIJRTQe68RAl9S8knGB1I69vgo8t1FU3KtioKKJ0s8zwxjGjJJVz+HvZOk0ZDHfr41lTeZGhzGkAtpx6D1Px+K1e8RHblI2yfh82+i0FoiKCWPFyrMTVZ5s4djAA9OmOi6fE5quTTO3MsVO5zai4yClY5jsOZnrzD6KVFVXea7x6/4g7Do2Bz3UdFOIKjlJLHOPvc3p54Xnr5W3Ks9Qs9Yy42aiLiXONOwknzPKF3Fx0sQgpooW9o2Bo+QwuRTdEREBERAREQEREBERAREQEREBERAREQERde5VUVFQT1c7wyOJhc5xOAEFN+MrVLLvr+GyU8sgjtcRjnZ15TITzA/QqH9H2iov2prfaKVgfLVTBjQfNfeubxU37V1zu1W8PmqKhxcQO4HQfYBS3wcaXF31++81ELjBbmeJE/HQS5GB9CV7NcKI/VlxNPUEVsslHQQxiNkMLWho7Dp1+6i/i1Y5+0tUWj8j8n6FS8o64kKQVWzuoHEfyaV0gXlr9QrPpQywObHd6Z7mF4Eg6K8u+GrmaN2cdPTyGCrqqZsFIWj8shbkf8FU62aoobjulp6hqQ0xTVrWuB7YwVn/ABZ62Zf9YRWChl5qG0s8I8j8skf35unToDhenJXleE4nUSirStoq9Taso7VTjxKiunAHXGXHqr8aljh0bs9WMooxGy32/wB1o8j5/clV24MdGG46kqdVVcAdTUPuQk9xL0II+WVP3EVUez7N6jOcF1G5o+ynltu2mqRqrX/VyeLVSynu97nH5lS3wj2kXLdqnmyf8lH7R8wQP3UP57lWF4HqYu1xdKrHutpC3Px5mlVvOqMU9vnjgqhPrmzxAfyaJzT/AO5KgvTsBqr1RwAdXygHPn1U7cb1C+DWtpquV3hzUjiXY6A856ZUJ6JkZHqu3SS/kbOCUp8FvpPHGlM1jdL0YxkUTXY/QkKWeE+1Nt20lDUhoDq3Mrj64JH7KvvEXdpNZbqW+x29vjmkjZTRhnXmJAd0x+quHoSyw6e0fbLPTgiOmgAAPcE9T9yo36rEKQorxHOLt69TH0qGj/4NUfd8Y75UhcRzS3ezUoPQGpb/APW1R6O69FZ8YRtPa0WtdcDTHDRYLJRyhtdc6RzMA4c2Pndlw+YUZ8MmjHav3Hp5qqPxKGgd7RPzsy1+D+XPbPXKjy43O5Xt9JT1Ej5jAzwqePvyjOcAfqrycOGgmaH0HCKiINuVfieq97mw7GAAfTGFO8fxx1+qR5SzzUbHs05WR0ww5sBDAPLotalz6XKqJznx35/XmK2eTMEkT4z2cCFrr3j0pV6P17crZURyeGZTJDI5pAkaeuR69ThYwT3p28dPS4dI2y7y6ca9ocPa2k/dbBB0GFrh2ov8Omdw7Ne6jPgUtS18gA8lsHq9SWej062+1VdBHROiEgkLxg9Ow9SmeNWKenh7yazp9D6HrbtI8e08hZTMP9b8dB/yoK4PdNVd31LdddXNrnt5jHEZW5JccO5gT6dliO4Wo75vhuZTWGyskNvifyRNAPK1ufzu8vXqVbnQWmqHSWlaGxUEfLFTRhpJOS49ySfPqVifGunfcvdREU2hERAREQEREBERAREQEREBERAREQEREBRpxMXuKzbQXkOlMctZCYISDg8x6/spLVbuOO8RM09abDzYlkm9px/aOZq3SN2iHLTqFS/efJge8XH7q9fCxpAaY22hqZWubVXMioma8YLSPdA+gCqBtHpp2q9fWuz9RFLO3xHAflHqtidFAylo4aZgAbEwMGBjsMKue34xjrrtzLzNV2inv2nK+z1QJhq4TG8fBemi86jWldIbhpXV9RE0S0lbQ1DuQnIc3r0+xXY0Vpu8a31TBaqCKSapqZPxJOpDQf6nHyH6q6W6OyOldc3M3WcSUle788sZID/1A7n4rIttduNM6Bo3xWSkxNL/ADJ5DzPPwBPUD4L0fz9J8O3f250pQ6N0lRWOhja0QxgSPx1e7uST591g/FfVGn2huDAceN+H9lLShbjEDztSeUZHtAz+nKVGv1G259KRdh27K0nAvSB0V8riOrZREDj1aCqt9AVargquNDatEajra+oZE1tc3uep/DHQDzXqzfKVPaY95durduLpk22pd4FVEeemnA6sd8fUdeyqdcuHzcy2VBeygppGtcfDfHUgk+h6dleiN7ZI2vb1a4Aj9F9LzVyTX0rNYlXrh+2RuNgvX8VaxeyS4twYIg/n5T094n18lYVEWZnbsKd8Wu3t3g1zJqa20FRWU1c3xJnRRl/huHTrjsMBQVS2q6Vc/gU1vqppc/kjhcXZ/QBbNpoo5o3RzRtkY4YLXDIK6FLYLHSz+PTWeghl788dO1rvqAq1zajWmJpuVYuGfZOtfdKbVurKIwwwnxKSmlGHFw83NPl36EK1zQGtDWgAAYAHkv1FO1ptO5aiNCwndjbawbiWcUl0i8Oqi609Szo+M/E9yOvZZsi5E6dUw1Lwxa5o7gY7HJR3Gl8pZJmxEf8AiSV3bPsJu1chDar9dfZLS3uBXeM1g+DMq4SLc5LSzxhgu0m2Vh28tZgt0fjVsv8APqnjLnH0Gew7dFnSIp720IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICpzxvVzKnXtqp2uz7NROY8fHnJ/dXGUUb07L2ncKdlxbUvo7lG3lEndrh8Rlbx2423LNo3CI+CHTbqi8XPUsga6Gnb7O0EdQ84dn6K2axPavRVBoXSsNno2gv/ADTyY/mO9fossXL25Tt2I1AiIsuiIiAos4paI1mz12eP+3jMv06fupTWP7jWH+J9D3awh/hmtp3RB2M4XazqRrZH6eSzzZSrranW9l02yZzaKtuLHSxjpzHlI6rEL5bamz3eptlZFJDNBIWOa9pDvh0PwU6cIGgKu5arbqyvpXsobec073DBdL0wR6jGeq9l7RxQiPJcKBnhwRxjs1oH2X2iLxLiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMM1ftfozVV1jul3tLH1TO74/cL/AIuwPe+aym12+itdFHR0FNFTQRjDWRtDQPou0i7uTQiIuAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k=';
const MOVE_LOGO_BUFFER = Buffer.from(MOVE_LOGO_BASE64, 'base64');

// =========================================================================
// ARGS
// =========================================================================
const [, , configPath, outputPath] = process.argv;
if (!configPath || !outputPath) {
  console.error('Usage: node output_builder.js <config.json> <output.docx>');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
const hasLogo = true;

// =========================================================================
// HELPERS
// =========================================================================
const para = (text, opts = {}) => new Paragraph({
  spacing: { before: opts.before || 80, after: opts.after || 80, line: 320 },
  alignment: opts.align || AlignmentType.LEFT,
  children: [new TextRun({ text, bold: opts.bold || false, italics: opts.italic || false, size: opts.size || 22, color: opts.color || BRAND.black, font: 'Arial' })],
});
const empty = () => new Paragraph({ spacing: { before: 0, after: 0 }, children: [] });
const h1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 480, after: 200 }, children: [new TextRun({ text: t, bold: true, size: 36, color: BRAND.black, font: 'Arial' })] });
const h2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 320, after: 140 }, children: [new TextRun({ text: t, bold: true, size: 28, color: BRAND.black, font: 'Arial' })] });
const subjectLine = (text, n) => new Paragraph({
  spacing: { before: 40, after: 20 },
  indent: { left: 360 },
  children: [
    new TextRun({ text: `${n}. `, bold: true, size: 20, color: BRAND.greyText, font: 'Arial' }),
    new TextRun({ text, italics: true, size: 20, color: BRAND.black, font: 'Arial' }),
  ],
});
const bodyLine = (text) => new Paragraph({
  spacing: { before: 40, after: 60, line: 300 },
  indent: { left: 360 },
  children: [new TextRun({ text, size: 22, color: BRAND.black, font: 'Arial' })],
});
const cellPanel = (paragraphs, fill) => new Table({
  width: { size: CW, type: WidthType.DXA },
  columnWidths: [CW],
  rows: [new TableRow({ children: [new TableCell({
    width: { size: CW, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR, color: 'auto' },
    margins: { top: 280, bottom: 280, left: 360, right: 360 },
    borders: { top: { style: BorderStyle.SINGLE, size: 4, color: fill }, bottom: { style: BorderStyle.SINGLE, size: 4, color: fill }, left: { style: BorderStyle.SINGLE, size: 4, color: fill }, right: { style: BorderStyle.SINGLE, size: 4, color: fill } },
    children: paragraphs,
  })] })],
});
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

// =========================================================================
// COVER PAGE
// =========================================================================
const coverPage = () => {
  const els = [empty(), empty()];
  if (hasLogo) {
    els.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }, children: [new ImageRun({ type: 'jpg', data: MOVE_LOGO_BUFFER, transformation: { width: 200, height: 93 }, altText: { title: 'Move', description: 'Move logo', name: 'MoveLogo' } })] }));
  } else {
    els.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }, children: [new TextRun({ text: 'Move', italics: true, size: 96, color: BRAND.black, font: 'Brush Script MT' })] }));
  }
  els.push(
    empty(), empty(), empty(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 600, after: 200 }, children: [new TextRun({ text: 'Your Outreach Campaign', bold: true, size: 56, color: BRAND.black, font: 'Arial' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200 }, children: [new TextRun({ text: `${config.role || ''}${config.company ? ' at ' + config.company : ''}`.trim(), size: 32, color: BRAND.greyText, font: 'Arial' })] }),
    empty(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }, children: [new TextRun({ text: 'Generated by the Talent Persuasion Framework', italics: true, size: 22, color: BRAND.greyText, font: 'Arial' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 }, children: [new TextRun({ text: 'Move, 2026', italics: true, size: 20, color: BRAND.greyText, font: 'Arial' })] }),
    pageBreak(),
  );
  return els;
};

// =========================================================================
// METHODOLOGY BLURB
// =========================================================================
const blurbSection = () => {
  const paragraphs = config.methodology_blurb.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean).map(line => para(line, { before: 100, after: 100 }));
  return [h1('Methodology: how we built this sequence'), cellPanel(paragraphs, BRAND.cream)];
};

// =========================================================================
// SEQUENCE
// =========================================================================
const sequenceSection = () => {
  const els = [pageBreak(), h1('Email sequence'), para('Four touches across a 14 to 17 day cadence. Each touch has a specific job, no touch repeats what another touch did.')];
  (config.touches || []).forEach((touch, idx) => {
    els.push(h2(`Touch ${idx + 1}: ${touch.title} (${touch.day})`));
    els.push(new Paragraph({ spacing: { before: 100, after: 40 }, children: [new TextRun({ text: 'Subject line options', bold: true, size: 22, color: BRAND.black, font: 'Arial' })] }));
    (touch.subjects || []).forEach((s, i) => els.push(subjectLine(s, i + 1)));
    els.push(new Paragraph({ spacing: { before: 140, after: 40 }, children: [new TextRun({ text: 'Body', bold: true, size: 22, color: BRAND.black, font: 'Arial' })] }));
    const bodyParas = (touch.body || '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    bodyParas.forEach(p => els.push(bodyLine(p)));
  });
  return els;
};

// =========================================================================
// LINKEDIN DM
// =========================================================================
const linkedinSection = () => {
  const els = [pageBreak(), h1('LinkedIn DM'), para('A separate, shorter message for warmer channels. Same positioning as the email sequence, different shape.')];
  const dmParas = (config.linkedin_dm || '').split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  dmParas.forEach(p => els.push(bodyLine(p)));
  return els;
};

// =========================================================================
// CTA (PROMINENT BLACK PANEL)
// =========================================================================
const ctaSection = () => {
  const ctaParagraphs = [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 200 }, children: [new TextRun({ text: 'WANT THIS WORKING FOR YOUR TEAM?', bold: true, size: 32, color: BRAND.ctaText, font: 'Arial' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 280 }, children: [new TextRun({ text: 'Move runs sourcing engines, embedded talent partnerships, and AI implementation in TA. 40 percent and above reply rates, 60+ partnerships, 1,000+ hires.', size: 22, color: BRAND.ctaText, font: 'Arial' })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 160, after: 100 }, children: [new ExternalHyperlink({ link: CALENDLY, children: [new TextRun({ text: 'BOOK A DISCOVERY CALL', bold: true, size: 28, color: BRAND.cream, font: 'Arial', underline: { type: 'single' } })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, children: [new ExternalHyperlink({ link: WEBSITE, children: [new TextRun({ text: 'wearemove.com', size: 22, color: BRAND.ctaText, font: 'Arial', underline: { type: 'single' } })] })] }),
  ];
  const els = [pageBreak(), empty(), empty()];
  els.push(new Table({
    width: { size: CW, type: WidthType.DXA },
    columnWidths: [CW],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CW, type: WidthType.DXA },
      shading: { fill: BRAND.ctaBg, type: ShadingType.CLEAR, color: 'auto' },
      margins: { top: 600, bottom: 600, left: 480, right: 480 },
      borders: { top: { style: BorderStyle.SINGLE, size: 8, color: BRAND.ctaBg }, bottom: { style: BorderStyle.SINGLE, size: 8, color: BRAND.ctaBg }, left: { style: BorderStyle.SINGLE, size: 8, color: BRAND.ctaBg }, right: { style: BorderStyle.SINGLE, size: 8, color: BRAND.ctaBg } },
      children: ctaParagraphs,
    })] })],
  }));
  if (hasLogo) {
    els.push(empty());
    els.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400, after: 80 }, children: [new ImageRun({ type: 'jpg', data: MOVE_LOGO_BUFFER, transformation: { width: 100, height: 47 }, altText: { title: 'Move', description: 'Move logo footer', name: 'MoveLogoFooter' } })] }));
  }
  return els;
};

const doc = new Document({
  styles: {
    default: { document: { run: { font: 'Arial', size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 36, bold: true, font: 'Arial' }, paragraph: { spacing: { before: 480, after: 200 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, font: 'Arial' }, paragraph: { spacing: { before: 320, after: 140 }, outlineLevel: 1 } },
    ],
  },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: PAGE_H }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `Generated by the Talent Persuasion Framework  |  ${config.company || ''}${config.company ? '  |  ' : ''}Move, 2026`, size: 18, color: BRAND.greyText, font: 'Arial' })] })] }) },
    children: [...coverPage(), ...blurbSection(), ...sequenceSection(), ...linkedinSection(), ...ctaSection()],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log('Saved:', outputPath, 'Size:', buffer.length, 'bytes');
});
