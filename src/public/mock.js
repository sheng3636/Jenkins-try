  // 地图样式
  export const mapStyle = [
    {
      "featureType": "manmade",
      "elementType": "geometry",
      "stylers": {
        "color": "#4488e4ff"
      }
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": {
        "color": "#00a5bdff"
      }
    },
    {
      "featureType": "building",
      "elementType": "all",
      "stylers": {
        "color": "#1b6fb9b0",
        "visibility": "on"
      }
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": {
        "color": "#0092baff",
        "visibility": "on"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "all",
      "stylers": {
        "color": "#2057adff"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": {
        "color": "#dffaffff"
      }
    },
    {
      "featureType": "green",
      "elementType": "all",
      "stylers": {
        "color": "#00e78485"
      }
    },
    {
      "featureType": "land",
      "elementType": "all",
      "stylers": {
        "color": "#0b4298ff"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": {
        "color": "#0b2b5cff"
      }
    }
  ];
  
  // 设备json
  export const equip = [{
    "deviceType": "S01",
    "deviceName": "智能烟感",
    "spare1": "icon-yanjizaoju",
    "equipNumber": "107",
    "equipRatio": "72%"
  }, {
    "deviceType": "S02",
    "deviceName": "智能井盖",
    "spare1": "icon-manhole-cover",
    "equipNumber": "107",
    "equipRatio": "72%"
  }, {
    "deviceType": "S20",
    "deviceName": "智能消防栓",
    "spare1": "icon-jingwuicon_svg-",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
    "deviceType": "S22",
    "deviceName": "违停占道",
    "spare1": "icon-weizhangdaiban",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
  
    "deviceType": "S26",
    "deviceName": "智能水箱盖",
    "spare1": "icon-shuixiangshuiwei",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
    "deviceType": "S05",
    "deviceName": "智能手环",
    "spare1": "icon-shouhuan",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
  
    "deviceType": "S16",
    "deviceName": "环境感知",
    "spare1": "icon-huanjingganzhi",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
    "deviceType": "S25",
    "deviceName": "高空抛物",
    "spare1": "icon-gaokongpaowu",
    "equipNumber": "127",
    "equipRatio": "62%"
  }, {
    "deviceType": "S17",
    "deviceName": "智能门磁",
    "spare1": "icon-menjin",
    "equipNumber": "56",
    "equipRatio": "87%"
  }, {
    "deviceType": "S07",
    "deviceName": "智慧电梯",
    "spare1": "icon-dianti",
    "equipNumber": "89",
    "equipRatio": "76%"
  }, {
    "deviceType": "S08",
    "deviceName": "水质监测",
    "spare1": "icon-icon-humidity",
    "equipNumber": "127",
    "equipRatio": "62%"
  }];

  // 园区摄像头信息
export const eventList = [
    {  
    equipAddress: "老年活动中心茶水间",
    equipArea: "浦东新区",
    equipElectric: "电量",
    equipHeight: "31.222963",
    equipImg: "图片2",
    equipLat: "31.132066",
    equipLng: "121.542588",
    equipName: "相关设备",
    equipSignal: "信号",
    equipState: "1",
    equipStreet: "张江",
    equipType: "二次供水",
    equipVillage: "机口村",
    equiptId: "2018121300008",
    eventDesc: "事件描述",
    eventGrade: "重要",
    eventId: "22222",
    eventName: "供水水质异常事件",
    eventOccurTime: "1514102880000",
    eventSource: "物联网感知",
    eventState: "带人工处理",
    id: "001",
    installDate: "2018-10-10 10:10:50",
    installPurposes: "目的",
    serviceProvider: "服务商",
    warningNum: "告警次数"},
    {   
    equipAddress: "	江海村秀南1043号",
    equipArea: "浦东新区",
    equipElectric: "电量",
    equipHeight: "31.222963",
    equipImg: "图片2",
    equipLat: "31.132066",
    equipLng: "121.542588",
    equipName: "视频监控",
    equipSignal: "信号",
    equipState: "1",
    equipStreet: "张江",
    equipType: "二次供水",
    equipVillage: "机口村",
    equiptId: "2018121300007",
    eventDesc: "事件描述",
    eventGrade: "重要",
    eventId: "22222",
    eventName: "供水水质异常事件",
    eventOccurTime: "1514102880000",
    eventSource: "物联网感知",
    eventState: "待人工处理",
    id: "001",
    installDate: "2018-10-10 10:10:50",
    installPurposes: "目的",
    serviceProvider: "服务商",
    warningNum: "告警次数"},
    {  
        equipAddress: "老年活动中心茶水间",
        equipArea: "浦东新区",
        equipElectric: "电量",
        equipHeight: "31.222963",
        equipImg: "图片2",
        equipLat: "31.132066",
        equipLng: "121.542588",
        equipName: "相关设备",
        equipSignal: "信号",
        equipState: "1",
        equipStreet: "张江",
        equipType: "二次供水",
        equipVillage: "机口村",
        equiptId: "2018121300008",
        eventDesc: "事件描述",
        eventGrade: "重要",
        eventId: "22222",
        eventName: "垃圾堆放事件",
        eventOccurTime: "1514102880000",
        eventSource: "物联网感知",
        eventState: "带人工处理",
        id: "001",
        installDate: "2018-10-10 10:10:50",
        installPurposes: "目的",
        serviceProvider: "服务商",
        warningNum: "告警次数"},
        {   
        equipAddress: "	江海村秀南1043号",
        equipArea: "浦东新区",
        equipElectric: "电量",
        equipHeight: "31.222963",
        equipImg: "图片2",
        equipLat: "31.132066",
        equipLng: "121.542588",
        equipName: "视频监控",
        equipSignal: "信号",
        equipState: "1",
        equipStreet: "张江",
        equipType: "二次供水",
        equipVillage: "机口村",
        equiptId: "2018121300007",
        eventDesc: "事件描述",
        eventGrade: "重要",
        eventId: "22222",
        eventName: "供水水质异常事件",
        eventOccurTime: "1514102880000",
        eventSource: "物联网感知",
        eventState: "待人工处理",
        id: "001",
        installDate: "2018-10-10 10:10:50",
        installPurposes: "目的",
        serviceProvider: "服务商",
        warningNum: "告警次数"},
        {  
            equipAddress: "老年活动中心茶水间老年活动中心茶水间老年活动中心茶水间",
            equipArea: "浦东新区",
            equipElectric: "电量",
            equipHeight: "31.222963",
            equipImg: "图片2",
            equipLat: "31.132066",
            equipLng: "121.542588",
            equipName: "相关设备",
            equipSignal: "信号",
            equipState: "1",
            equipStreet: "张江",
            equipType: "二次供水",
            equipVillage: "机口村",
            equiptId: "2018121300008",
            eventDesc: "事件描述",
            eventGrade: "重要",
            eventId: "22222",
            eventName: "垃圾堆放事件",
            eventOccurTime: "1514102880000",
            eventSource: "物联网感知",
            eventState: "带人工处理",
            id: "001",
            installDate: "2018-10-10 10:10:50",
            installPurposes: "目的",
            serviceProvider: "服务商",
            warningNum: "告警次数"},
            {   
            equipAddress: "	江海村秀南1043号",
            equipArea: "浦东新区",
            equipElectric: "电量",
            equipHeight: "31.222963",
            equipImg: "图片2",
            equipLat: "31.132066",
            equipLng: "121.542588",
            equipName: "视频监控",
            equipSignal: "信号",
            equipState: "1",
            equipStreet: "张江",
            equipType: "二次供水",
            equipVillage: "机口村",
            equiptId: "2018121300007",
            eventDesc: "事件描述",
            eventGrade: "重要",
            eventId: "22222",
            eventName: "供水水质异常事件",
            eventOccurTime: "1514103000000",
            eventSource: "物联网感知",
            eventState: "待人工处理",
            id: "001",
            installDate: "2018-10-10 10:10:50",
            installPurposes: "目的",
            serviceProvider: "服务商",
            warningNum: "告警次数"},
            {  
                equipAddress: "老年活动中心茶水间",
                equipArea: "浦东新区",
                equipElectric: "电量",
                equipHeight: "31.222963",
                equipImg: "图片2",
                equipLat: "31.132066",
                equipLng: "121.542588",
                equipName: "相关设备",
                equipSignal: "信号",
                equipState: "1",
                equipStreet: "张江",
                equipType: "二次供水",
                equipVillage: "机口村",
                equiptId: "2018121300008",
                eventDesc: "事件描述",
                eventGrade: "重要",
                eventId: "22222",
                eventName: "垃圾堆放事件",
                eventOccurTime: "1514103000000",
                eventSource: "物联网感知",
                eventState: "带人工处理",
                id: "001",
                installDate: "2018-10-10 10:10:50",
                installPurposes: "目的",
                serviceProvider: "服务商",
                warningNum: "告警次数"},
                {   
                equipAddress: "	江海村秀南1043号",
                equipArea: "浦东新区",
                equipElectric: "电量",
                equipHeight: "31.222963",
                equipImg: "图片2",
                equipLat: "31.132066",
                equipLng: "121.542588",
                equipName: "视频监控",
                equipSignal: "信号",
                equipState: "1",
                equipStreet: "张江",
                equipType: "二次供水",
                equipVillage: "机口村",
                equiptId: "2018121300007",
                eventDesc: "事件描述",
                eventGrade: "重要",
                eventId: "22222",
                eventName: "供水水质异常事件",
                eventOccurTime: "1514103000000",
                eventSource: "物联网感知",
                eventState: "待人工处理",
                id: "001",
                installDate: "2018-10-10 10:10:50",
                installPurposes: "目的",
                serviceProvider: "服务商",
                warningNum: "告警次数"}
];  
