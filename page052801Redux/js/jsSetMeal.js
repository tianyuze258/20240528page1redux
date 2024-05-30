/* 种类 */
function buttonContent(buttonId) {
    var buttons = document.getElementsByClassName('kind');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('buttonActive');
    }
    document.getElementById(buttonId).classList.add('buttonActive');
}
/* 种类 */

/* 品牌 */
function toggleContent(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('brandsBox');
    }
    document.getElementById(sectionId).classList.add('brandsBox');
}
/* 品牌 */

/* 收银台 */
// function toggleContent(sectionId) {
//     // 获取所有section元素
//     var sections = document.getElementsByClassName('section');
//     // 遍历所有section，移除active类
//     for (var i = 0; i < sections.length; i++) {
//         sections[i].classList.remove('active');
//     }
//     // 添加active类到当前section
//     document.getElementById(sectionId).classList.add('active');
// }

document.getElementById('myForm').onchange = function(event) {    /* 表单内容改变，触发事件处理器 */
    if (event.target.type === 'radio') {    /* 检查触发事件的元素是否是radio */
      var value = parseInt(event.target.value);    /* 获取value，转换为整数 */
      document.getElementById('price').textContent = value;    /* 将id为value的元素的文本更新为获得的value */
    }
  };
/* 收银台 */