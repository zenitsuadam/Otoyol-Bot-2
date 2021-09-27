module.exports = {
  name: "join",
  code: `
  $joinVC[$message[1]]
  $argsCheck[>1;:exclamation: **Bir Ses Kanalının ID Sini Girmen Gerekiyor!**]
  $description[:inbox_tray: <#$message[1]> ***Adlı Ses Kanalına Giriş Yaptım!***]
  $color[9b00ff]
  
   $onlyIf[$getVar[bakım]!=açık;:exclamation: **<@$authorID>, Kurucu Tarafından Bakım Modu Açılmış. Sanırım Bişeyleri Fixliyor.**]
`}
