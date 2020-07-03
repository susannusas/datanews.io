var dom = document.getElementById("mychart7");
var mychart7 = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '2013-2019农村居民人均可支配收入',
        left: 'center',
        textStyle: {fontSize: 14},
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        boundaryGap: false,
        splitLine: {show: false},
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
    },
    yAxis: {
        type: 'value',
        min: 8000,
        name: '单位：元',
        splitLine: {show: false},
        axisLine: {show:false},
        axisTick: {show:false},
    },
    tooltip: {
        trigger: 'axis'
    },
    series: [{
        name: '农村居民人均可支配收入',
        data: [9429.59, 10488.88, 11421.71, 12363.41, 13432.43, 14617.03, 16020.67],
        type: 'line',
        /*lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowBlur: 10,
            shadowOffsetY: 10
        }, */
        lineStyle: {
            width: 2,
            color:'#ee522f',
            // shadowColor: 'rgba(0,0,0,0.1)',
            // shadowBlur: 10,
            // shadowOffsetY: 10,
        },
    }],

};


mychart7.setOption(option, true);
