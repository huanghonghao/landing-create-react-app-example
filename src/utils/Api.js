import server from './Request';


// 业务对象
export function getBusinessObject() {
    return server({
        url: "/public/workbench/businessObject/total",
        method: 'get',
    })
}

// 业务活动
export function getBusinessActivity() {
    return server({
        url: "/public/workbench/businessActivity/total",
        method: 'get',
    })
}

// 业务场景
export function getBusinessScenario() {
    return server({
        url: "/public/workbench/businessScenario/total",
        method: 'get',
    })
}

// 业务服务
export function getBusiness() {
    return server({
        url: "/public/portal/statistics/business/total",
        method: 'get',
    })
}

// 数据服务
export function getServiceData() {
    return server({
        url: "/public/portal/statistics/data/total",
        method: 'get',
    })
}

// 服务调用总量
export function getTotalServiceCallLast30Day() {
    return server({
        url: '/public/portal/statistics/service/queryTotalServiceCallLast30Day',
        method: 'post'
    });
}

// 服务调用总量（环比）
export function getServiceRelativeRatio() {
    return server({
        url: '/public/portal/statistics/service/queryServiceRelativeRatio',
        method: 'post'
    });
}

// 服务调用总量（同比）
export function getServiceWeekOnWeek() {
    return server({
        url: '/public/portal/statistics/service/queryServiceWeekOnWeek',
        method: 'post'
    });
}

// 业务服务调用率
export function getTotalBusinessServiceCallLast30Day() {
    return server({
        url: '/public/portal/statistics/service/queryTotalBusinessServiceCallLast30Day',
        method: 'post'
    });
}

export function getBusinessRelativeRatio() {
    return server({
        url: '/public/portal/statistics/service/queryBusinessRelativeRatio',
        method: 'post'
    });
}

export function getBusinessServiceWeekOnWeek() {
    return server({
        url: '/public/portal/statistics/service/queryBusinessServiceWeekOnWeek',
        method: 'post'
    });
}

export function getTotalDataServiceCallLast30Day() {
    return server({
        url: '/public/portal/statistics/service/queryTotalDataServiceCallLast30Day',
        method: 'post'
    });
}

export function getDataServiceRelativeRatio() {
    return server({
        url: '/public/portal/statistics/service/queryDataServiceRelativeRatio',
        method: 'post'
    });
}

export function getDataServiceWeekOnWeek() {
    return server({
        url: '/public/portal/statistics/service/queryDataServiceWeekOnWeek',
        method: 'post'
    });
}

// 服务调用率  /portal/statistics/service/queryServiceCallRatioLast30Day
export function getServiceCallRatioLast30Day() {
    return server({
        url: '/public/portal/statistics/service/queryServiceCallRatioLast30Day',
        method: 'post'
    });
}

export function getServiceCallRelativeRatio() {
    return server({
        url: '/public/portal/statistics/service/queryServiceCallRelativeRatio',
        method: 'post'
    });
}

export function getServiceCallWeekOnWeek() {
    return server({
        url: '/public/portal/statistics/service/queryServiceCallWeekOnWeek',
        method: 'post'
    });
}