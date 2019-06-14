const getTime = () => {
    var date = new Date().toString().match(/(.+) (.+) (\d+) (\d+) ((\d+):(\d+):(\d+))/);
    return date;
}

const viewTime = (date) => {
    const month = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
    const week = { 'Sun': '日', 'Mon': '月', 'Tue': '火', 'Wed': '水', 'Thu': '木', 'Fri': '金', 'Sat': '土' };
    document.getElementById('time').innerHTML = `${date[4]}年${month[date[2]]}月${date[3]}日<br>${week[date[1]]}曜日${date[5]}`;
}

setInterval(() => {
    var date = getTime();
    viewTime(date);
}, 1000);
