module.exports = {
  name: "leave",
  code: `
  $leaveVC
  $description[:outbox_tray: ***Bulunduğum Ses Kanalından Çıkış Yaptım!***]
  $suppressErrors[:exclamation: **Zaten Bir Ses Kanalında Bulunmuyorum!**]
  $color[9b00ff]
  
  $onlyIf[$getVar[bakım]!=açık;:exclamation: **<@$authorID>, Sahibim Tarafından Bakım Modu Açılmış. Sanırım Bişeyleri Fixliyor.**]
`}