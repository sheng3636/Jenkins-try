<template>
    <el-row :gutter="20">
        <el-col :span="16">
            <div class="main-wraper">
                <el-tabs type="card" @tab-click="tabClick">
                    <el-tab-pane label="事件概述">
                        <el-form :model="eventInfoForm" :label-position="labelPosition" label-width="80px">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="事件ID">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventId" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="事件名称">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventName" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="事件状态">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventState" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="事件来源">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventSource" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="告警次数">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.warningNum" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8"></el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="事件发生时间">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventOccurTime" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="相关设备（设备别名）">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.equipName" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="设备类型">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.equipType" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="18">
                                    <el-form-item label="事件描述">
                                        <el-input type="textarea" :rows="2" placeholder="请输入内容" :disabled="isDisabled" v-model="eventInfoForm.eventDesc">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="设备详情">
                        <el-form :model="eventInfoForm" :label-position="labelPosition" label-width="80px">
                            <el-row>
                                <el-col :span="8">
                                    <el-form-item label="设备编号">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.equiptId" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="设备类型">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.equipType" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="设备状态">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.equipState" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="16">
                                    <el-row>
                                        <el-col :span="12">
                                            <el-form-item label="设备电量">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.equipElectric" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="设备信号">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.equipSignal" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="12">
                                            <el-form-item label="设备厂商">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.serviceProvider" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="安装日期">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.installDate" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="12">
                                            <el-form-item label="街/镇">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.equipStreet" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="12">
                                            <el-form-item label="局/村">
                                                <el-input placeholder="请输入内容" v-model="eventInfoForm.equipVillage" :disabled="isDisabled">
                                                </el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24">
                                            <el-form-item label="地址描述">
                                                <el-input type="textarea" :rows="2" placeholder="请输入内容" :disabled="isDisabled" v-model="eventInfoForm.equipAddress">
                                        </el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>

                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="地图位置">
                                        <baidu-map class="equip-map" :center="position" :scroll-wheel-zoom="true" :zoom="16">
                                            <bm-marker :position="position" @click="infoWindowOpen" :icon="{url: '../../../../static/imp/img/mapPointB.png', size: {width: 30, height: 30}}">
                                                <bm-info-window :show="showMap" @close="infoWindowClose" @open="infoWindowOpen">
                                                    <div class="lineHeight">{{eventInfoForm.equipName}}</div>
                                                    <div class="lineHeight">{{eventInfoForm.equipState}}</div>
                                                    <div class="lineHeight">{{eventInfoForm.equipAddress}}</div>
                                                    </bm-info-window>
                                            </bm-marker>
                                        </baidu-map>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col :span="16">
                                    <el-form-item label="安装目的">
                                        <el-input type="textarea" :rows="2" placeholder="请输入内容" :disabled="isDisabled" v-model="eventInfoForm.eventId">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="设备照片">
                                        <el-input placeholder="请输入内容" v-model="eventInfoForm.eventId" :disabled="isDisabled">
                                        </el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-form>
                    </el-tab-pane>
                </el-tabs>
                <el-row>
                    <el-col :offset="12">
                        <el-button type="default" size="small" class="commonBtn" @click="goBack">返回</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="main-wraper">
                <div class="main-header">权限信息</div>
                <div class="main-content">
                    <el-steps :space="80" :active="step.active" align-center finish-status="success" process-status="wait" direction="vertical">
                        <!-- <el-step title="2018/08/22 13:31:50" description="2018/08/22 13:31:50 平台感知系统检测到 井盖异常打开告警"></el-step>
                        <el-step title="步骤2" description="这是一段很长很"></el-step>
                        <el-step title="步骤3" description="很长的描述性文字" dates="2018.10.10" button="确认"></el-step>
                        <el-step >
                              <template slot-scope="step">{{step.title}}</template> -->
                             <!-- <slot name="mySlot">很长的描述性文字</slot>
                        </el-step> -->
                        <el-step v-for="(item,index) in step.steps" :title="item.title" :description="item.description" :key="index"></el-step>
                    </el-steps>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import { apiGet } from '../../../api/api'
    export default {
        name: "eventInfo",
        data() {
            return {
                labelPosition: 'top',
                isDisabled: true,
                textarea:'vvv',
                eventInfoForm: {},
                position: {
                    lng: '',
                    lat: ''
                },
                centerPosition: {
                    lng: '',
                    lat: ''
                },
                mapIcon: '../../../../static/imp/img/mapPointB.png',
                showMap: false,
                step: {
                    'active': 2,
                    'steps': [
                        {title: '2018/08/16 14:05:23 平台感知', description: '系统检测到 水质浊度值超标--'},
                        {title: '2018/08/16 14:05:23 系统判断', description: '告警消息 水质浊度值超标--'},
                        {title: '系统自动处理', description: '生成处理工单'},
                        {title: '未完成', description: '2018/08/22 13:31:50'}
                    ]
                }
            }
        },
        created() {
            // console.log(this.$route.query.id);
            let eventId = this.$route.query.id;
            this.getEventList({eventId:eventId})
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            getEventList(params) {
                let url = '/api/mock/trueExam.do?id=153785524976912000454';
                apiGet(this, url, params).then((res) => {
                    this.eventInfoForm = res.data[0];
                })
            },
            tabClick(tab) {
                // console.log(tab.label);
                if(tab.label === '设备详情') {
                    let _this = this;
                    setTimeout( ()=>{
                        _this.position.lng = this.eventInfoForm.equipLng;
                        _this.position.lat = this.eventInfoForm.equipLat;
                        _this.showMap = true;
                    },100)
                }
            },
            infoWindowClose () {
                this.showMap = false
            },
            infoWindowOpen () {
                this.showMap = true
            }
        }
    }
</script>

<style scoped>
    .equip-map {
        width: 100%;
        height: 260px;
    }
    .commonBtn {
        width: 80px;
        margin-bottom: 12px;
    }
</style>
