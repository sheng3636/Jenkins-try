<template>
    <!-- 首页 -->
    <div class="container">
        <!-- 头部 item -->
        <div class="header-content clearfix">
            <div class="header-item">
                <div class="item clearfix item1">
                    <div class="Hleft">
                        <img src="../../../assets/images/imp/equipnum.png" alt="">
                    </div>
                    <div class="Hright">
                        <p class="number number1">{{content.equipNum}}</p>
                        <p class="txt">设备总数</p>
                    </div>
                </div>
            </div>
            <div class="header-item">
                <div class="item clearfix item2">
                    <div class="Hleft">
                        <img src="../../../assets/images/imp/error.png" alt="">
                    </div>
                    <div class="Hright">
                        <p class="number number2">{{content.equipErrNum}}</p>
                        <p class="txt">异常设备</p>
                    </div>
                </div>
            </div>
            <div class="header-item">
                <div class="item clearfix item3">
                    <div class="Hleft">
                        <img src="../../../assets/images/imp/repair.png" alt="">
                    </div>
                    <div class="Hright">
                        <p class="number number2">{{content.equipNoContactNum}}</p>
                        <p class="txt">失联设备</p>
                    </div>
                </div>
            </div>
            <div class="header-item">
                <div class="item clearfix item4">
                    <div class="Hleft">
                        <img src="../../../assets/images/imp/event.png" alt="">
                    </div>
                    <div class="Hright">
                        <p class="number number2">{{content.eventNum}}</p>
                        <p class="txt">平台事件</p>
                    </div>
                </div>
            </div>
            <div class="header-item">
                <div class="item clearfix item5">
                    <div class="Hleft">
                        <img src="../../../assets/images/imp/toevent.png" alt="">
                    </div>
                    <div class="Hright">
                        <p class="number number2">{{content.pendingEventNum}}</p>
                        <p class="txt">待办事件</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wraper">
            <div class="main-header">公告通知</div>
            <div class="main-content p0">
                <el-row style="height: 350px;border-bottom: 1px solid #ddd;">
                    <el-col :span="10" style="border-right: 1px solid #ddd;">
                        <el-table
                                :data="tableData"
                                border
                                height="350"
                                @row-click="showNotice"
                                style="width: 100%">
                            <el-table-column
                                    label="操作"
                                    align="center"
                                width="120">
                                <template slot-scope="scope">
                                    <el-button type="default" class="village-btn" size="mini">{{scope.row.noticeAddress}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="noticeInfo"
                                    label="地址">
                            </el-table-column>
                            <el-table-column
                                    prop="noticeDate"
                                    label="日期"
                                    width="180">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="14">
                        <div class="text-wraper">
                            <p>
                                {{notice_txt}}
                            </p>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--待办事件 社区详情-->
        <el-row :gutter="20" style="margin-top: 12px;">
            <el-col :span="10">
                <div class="main-wraper">
                    <div class="main-header">待办事件</div>
                    <div class="main-content p0">
                        <el-table
                                :data="pendEventList"
                                border
                                height="350"
                                @row-click="pendEventRowClick"
                                style="width: 100%">
                            <el-table-column
                                    label="状态"
                                    align="center"
                                    width="100">
                                <template slot-scope="scope">
                                    <el-button type="danger" size="small">警告</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="equipAddress"
                                    label="地址">
                            </el-table-column>
                            <el-table-column
                                    prop="equipStype"
                                    label="类型">
                            </el-table-column>
                            <el-table-column
                                    prop="occurerTime"
                                    label="发现时间"
                                    width="180">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="main-wraper">
                    <div class="main-header">异常设备</div>
                    <div class="main-content p0">
                        <el-table
                                :data="errEquipList"
                                border
                                height="350"
                                @row-click="errEquipRowClick"
                                style="width: 100%">
                            <el-table-column
                                    label="状态"
                                    align="center"
                                    width="100">
                                <template slot-scope="scope">
                                    <el-button type="warning" size="small">警告</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="equipAddress"
                                    min-width="260"
                                    label="地址">
                            </el-table-column>
                            <el-table-column
                                    prop="equipStype"
                                    width="120"
                                    label="类型">
                            </el-table-column>
                            <el-table-column
                                    prop="occurerTime"
                                    label="日期"
                                    width="120">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="main-wraper">
                    <div class="main-header">社区详情</div>
                    <div class="main-content" style="height: 768px;">
                        <transition name="fade">
                            <div v-show="showContainer1" class="container1">
                                <!--首页地图-->
                                <!-- <div class="index-map" id="allmap"></div> -->
                                <baidu-map class="index-map" :center="mainPosition" :scroll-wheel-zoom="true" :zoom="16">
                                    <bm-marker :position="mainPosition" :icon="{url: '../../../../static/imp/img/mapPointB.png', size: {width: 30, height: 30}}">
                                    </bm-marker>
                                </baidu-map>
                                <div class="community-info">
                                    <p class="service-title">社区信息</p>
                                    <el-row>
                                        <el-col :span="14">
                                            <el-row class="borderBotom">
                                                <el-col :span="10">
                                                    <p><span class="txt">占地面积: </span>{{content.cityArea}}平方公里</p>
                                                </el-col>
                                                <el-col :span="10" :offset="4">
                                                    <p><span class="txt">总户数: </span>{{content.houseTotal}}户</p>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14">
                                            <el-row class="borderBotom">
                                                <el-col :span="10">
                                                    <p><span class="txt">社区常住人口: </span>{{content.residentPeople}}人</p>
                                                </el-col>
                                                <el-col :span="10" :offset="4">
                                                    <p><span class="txt">外来流动人员: </span>{{content.floatingPeople}}人</p>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="14">
                                            <el-row class="borderBotom">
                                                <el-col :span="10">
                                                    <p><span class="txt">党员人数: </span>{{content.partyPeople}}人</p>
                                                </el-col>
                                                <el-col :span="10" :offset="4"></el-col>
                                            </el-row>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-show="showContainer2" class="container2">
                                <div class="closeMap" @click="closeMap"><i class="el-icon-close"></i></div>
                                <!--首页社区地图-->
                                <!-- <div class="community-map" id="communityMap"></div> -->
                                <baidu-map class="community-map" :center="equipPosition" :scroll-wheel-zoom="true" :zoom="16">
                                    <bm-marker :position="equipPosition" :icon="{url: '../../../../static/imp/img/mapPointB.png', size: {width: 30, height: 30}}">
                                    </bm-marker>
                                </baidu-map>
                                <div class="community-info">
                                    <el-row>
                                        <el-col :span="4" :offset="20">
                                            <el-button type="default" size="small" class="dangerAnimate">告警</el-button>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">设备编号: </span>{{detailForm.equipId}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">设备类型: </span>{{detailForm.equipStype}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">发现时间: </span>{{detailForm.occurerTime}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row v-show="eventInfo.name==='pendEvent'">
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">任务状态: </span>{{detailForm.taskState}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row v-show="eventInfo.name==='pendEvent'">
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">事件描述: </span>{{detailForm.eventDescribe}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row v-show="eventInfo.name==='errEquip'">
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">设备厂商: </span>{{detailForm.ServiceProvider}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row v-show="eventInfo.name==='errEquip'">
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">故障电话: </span>{{detailForm.faultPhone}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row v-show="eventInfo.name==='errEquip'">
                                        <el-col :span="24" class="borderBotom">
                                            <p><span class="txt">故障描述: </span>{{detailForm.faultDescription}}</p>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="22" class="textCenter mt20">
                                            <el-button type="primary" @click="viewDetails">查看详情</el-button>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- table-dialog -->
        <el-dialog title="设备详情" :visible.sync="detailsDialog"
                custom-class="init-form">
            <CheckDetail :detailForm="detailForm"></CheckDetail>
            <div slot="footer" class="dialog-footer">
                <el-button @click="detailsDialog = false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import { apiGet } from '../../../api/api';
  import CheckDetail from './detail';
    export default {
        name: "impIndex",
        components: {
            CheckDetail
        },
        data() {
            return {
                labelPosition: 'top',
                tableData: [],
                pendEventList: [], // 待办事件
                errEquipList: [], // 异常设备
                content: {},  // 首页数据
                notice_txt: '',
                eventInfo: {
                    name: '',
                    eventId: '',
                },
                mainPosition:{
                    lng: '',
                    lat: ''
                },
                equipPosition:{
                    lng: '',
                    lat: ''
                },
                showContainer1: true,
                showContainer2: false,
                detailsDialog: false,
                pendEventData: {},
                detailForm: {}
            }
        },
        methods: {
            showNotice(row){
                this.notice_txt = row.noticeTxt;
            },
            pendEventRowClick(row) { // 待办事件行内点击事件
                this.detailForm = row;
                this.eventInfo.eventId = row.pendEventId;
                this.eventInfo.name = 'pendEvent';
                this.showContainer1 =  false;
                this.showContainer2 =  true;

                this.equipPosition.lng = row.equipLng;
                this.equipPosition.lat = row.equipLat;
            },
            errEquipRowClick(row) { // 异常设备行内点击事件
                this.detailForm = row;
                this.eventInfo.eventId = row.pendEventId;
                this.eventInfo.name = 'errEquip';
                this.showContainer1 =  false;
                this.showContainer2 =  true;

                this.equipPosition.lng = row.equipLng;
                this.equipPosition.lat = row.equipLat;
            },
            getAllData(){   //获取首页所有的ajax数据
                this.getNotice();
                this.getPendEvent();
                this.getErrEquip();
            },
            viewDetails() {  // 查看详情
                this.detailsDialog = true;
            },
            closeMap() {  // 关闭设备，事件 地图
                this.showContainer1 =  true;
                this.showContainer2 =  false;

                this.equipPosition.lng = '';
                this.equipPosition.lat = '';
            },
            getContent() {  // 首页所需基本数据
                const url = '/api/mock/trueExam.do?id=153723504171512000089';
                apiGet(this, url).then( (res)=> {
                    this.content= res.data;

                    this.mainPosition.lng = res.data.cityLng;
                    this.mainPosition.lat = res.data.cityLat;
                })
            },
            getNotice() {  // 公告通知
                const url = '/api/mock/trueExam.do?id=153716776973012000051';
                apiGet(this, url).then( (res)=> {
                    this.notice_txt = res.data[0].noticeTxt; // 右边展示文 默认第一条
                    this.tableData = res.data;
                })
            },
            getPendEvent() { // 待办事件
                const url = '/api/mock/trueExam.do?id=153725049887512000131';
                apiGet(this, url).then( (res)=> {
                    this.pendEventList = res.data;
                })
            },
            getErrEquip() {  // 异常设备
                const url = '/api/mock/trueExam.do?id=153741362891412000263';
                apiGet(this, url).then( (res)=> {
                    this.errEquipList = res.data;
                })
            }
        },
        mounted() {
            let _this = this;
            setTimeout( ()=> {
                _this.getContent();
            },400)
            },
        created() {
            this.getAllData();
        }
    }
</script>

<style scoped lang="scss">
    .village-btn {
        color: #fff;
        background-color: #5bc0de;
        border-color: #46b8da;
    }
    .village-btn:hover {
        color: #fff;
        background-color: #31b0d5;
        border-color: #269abc;
    }
    .mt20 { margin-top: 12px;}
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .container {
        background-color: #fff;
        padding: 0 15px;
    }
    .container .main-wraper .main-content.p0 { padding: 0!important;}
    .text-wraper {
        padding: 15px;
        height: 350px;
        overflow-y: auto;
    }
    .header-content {
        width: 100%;
        padding: 15px 0;
    }
    .header-content .header-item {
        width: 20%;
        float: left;
        padding-left: 15px;
    }
    .header-content .header-item .item{
        width: 100%;height: 121px;
        border-radius: 5px;
        text-align: center;
        box-sizing: border-box;
    }
    .header-content .header-item .item1 { background: #6a8abe; box-shadow: 0 0 9px #6a8abe }
    .header-content .header-item .item2 { background: #ffab51; box-shadow: 0 0 9px #ffab51 }
    .header-content .header-item .item3 { background: #ff6d7e; box-shadow: 0 0 9px #ff6d7e }
    .header-content .header-item .item4 { background: #44bfca; box-shadow: 0 0 9px #44bfca}
    .header-content .header-item .item5 { background: #80c269; box-shadow: 0 0 9px #80c269 }

    .header-content .header-item:nth-child(1) { padding-left: 0px;}

    .header-content .header-item .Hleft {
        width: 50%; float: left;
        height: 120px;
        text-align: center;
        border-radius: 5px 0 0 5px;
        padding: 0 15px;
        line-height: 120px;
    }
    .header-content .header-item .Hleft>img {
        width: 100%;
        height: 100%;
    }

    .header-content .header-item .Hright{
        width: 50%; float: left;
        height: 120px;
    }
    .header-content .header-item .Hright .number{
        font-size: 28px;line-height: 28px;margin-top: 35px;color: #fff;font-weight: bold;
    }
    .header-content .header-item .Hright .txt {
        font-size: 16px;line-height: 16px;color: #fff;margin-top: 8px;
    }
    .container1 {
        .index-map { width: 100%;height:520px;}
        .community-info {
            margin-top: 24px;
            .service-title {
                color: #44bfca;
                font-size: 14px;
                font-weight: bold;
            }
            .borderBotom {
                border-bottom: 1px solid #ddd;
                p {
                    padding: 8px 15px;
                    .txt {
                        font-weight: 600;
                        color: #7a7676;
                    }
                }
            }
        }
    }
    .container2 {
        position: relative;
        .closeMap {
            width: 30px;
            height: 30px;
             line-height: 30px;
            text-align: center;
            background: rgba(12, 218, 255, .7);
            color: #fff;
            font-size: 22px;
            font-weight: 900;
            position: absolute;
            top: -15px;
            right: -10px;
            z-index: 9;
            cursor: pointer;
            border-radius: 50%;
        }
        .closeMap:hover {background: rgba(12, 218, 255, 1);}
        .community-map { width: 100%;height: 390px;}
        .community-info {
            margin-top: 24px;
            .service-title {
                color: #44bfca;
                font-size: 14px;
                font-weight: bold;
            }
            .borderBotom {
                border-bottom: 1px solid #ddd;
                p {
                    padding: 8px 15px;
                    .txt {
                        font-weight: 600;
                        color: #7a7676;
                    }
                }
            }
        }
    }

</style>
