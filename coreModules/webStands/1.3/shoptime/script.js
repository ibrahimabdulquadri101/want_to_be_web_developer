let today = new Date().getDay();
// javascript 得到的日期
// 0 星期日
// 1 星期一
// 2 星期二
// 3 星期三
// 4 星期四
// 5 星期五
// 6 星期六
// // 我们定义的日期
//  0 星期一
//  1 星期二
//  2 星期三
//  3 星期四
//  4 星期五
//  5 星期六
//  6 星期日
if (today == 0) {
    today == 6;
}
else {
    today--;
}

const dts = document.querySelectorAll('dt');
dts[today].className = 'today';