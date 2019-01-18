<template>
    <div>
        <div class="header">
            <el-row :gutter="20">
                <el-col :span="3">
                    <div class="item" @click="isEquipChange(1)" :class="{active: showEquip === 1}" style="margin-left: 25px;">
                        <p class="img"><img src="../../../assets/images/imp/equipment/list00.png" alt=""></p>
                        <p class="txt">总数</p>
                    </div>
                </el-col>
                <el-col :span="21" style="border-left: 1px solid #ddd;">
                    <!--<el-carousel height="200px">-->
                        <!--<el-carousel-item v-for="item in equipItem" :key="item.id">-->
                            <!--&lt;!&ndash;<div v-for="val in item.data" :key="val.id">&ndash;&gt;-->
                                <!--&lt;!&ndash;<span>{{ val.id }}</span>&ndash;&gt;-->
                                <!--&lt;!&ndash;<span>{{ val.name }}</span>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--<div class="header-item clearfix">-->
                                <!--<div class="item fl" v-for="val in item.data" :key="val.id" @click="isEquipChange(val.id)" :class="{active: showEquip === val.id}">-->
                                    <!--<p class="img"><img :src="val.imgUrl" alt=""></p>-->
                                    <!--<p class="txt">{{val.name}}</p>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</el-carousel-item>-->
                    <!--</el-carousel>-->
                    <div class="header-item clearfix">
                        <div class="item fl" @click="isEquipChange(2)" :class="{active: showEquip === 2}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS01.png" alt=""></p>
                            <p class="txt">智能烟感</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(3)" :class="{active: showEquip === 3}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS02.png" alt=""></p>
                            <p class="txt">智能井盖</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(4)" :class="{active: showEquip === 4}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS08.png" alt=""></p>
                            <p class="txt">二次供水</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(5)" :class="{active: showEquip === 5}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS13.png" alt=""></p>
                            <p class="txt">燃气探测</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(6)" :class="{active: showEquip === 6}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS24.png" alt=""></p>
                            <p class="txt">智能路灯</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(7)" :class="{active: showEquip === 7}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS11.png" alt=""></p>
                            <p class="txt">非机动车</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(8)" :class="{active: showEquip === 8}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS22.png" alt=""></p>
                            <p class="txt">违停占道</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(9)" :class="{active: showEquip === 9}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS05.png" alt=""></p>
                            <p class="txt">智能手环</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(10)" :class="{active: showEquip === 10}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS37.png" alt=""></p>
                            <p class="txt">车辆识别</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(11)" :class="{active: showEquip === 11}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS10.png" alt=""></p>
                            <p class="txt">人脸识别</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(12)" :class="{active: showEquip === 12}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS36.png" alt=""></p>
                            <p class="txt">视频监控</p>
                        </div>
                        <div class="item fl" @click="isEquipChange(13)" :class="{active: showEquip === 13}">
                            <p class="img"><img src="../../../assets/images/imp/equipment/listS41.png" alt=""></p>
                            <p class="txt">鹰眼</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="main-wraper">
            <div class="main-header">设备运行信息</div>
            <div class="main-content">
                <div class="equip-list clearfix">
                    <div class="eqItem fl" @click="isChange(1)">
                        <div class="item clearfix active" :class="{item1: isShow === 1}">
                            <div class="Hleft">
                                <img src="../../../assets/images/imp/total01.png" alt="">
                            </div>
                            <div class="Hright">
                                <p class="number">7</p>
                                <p class="txt">失联设备</p>
                            </div>
                        </div>
                    </div>
                    <div class="eqItem fl" @click="isChange(2)">
                        <div class="item clearfix active" :class="{item2: isShow === 2}">
                            <div class="Hleft">
                                <img src="../../../assets/images/imp/right.png" alt="">
                            </div>
                            <div class="Hright">
                                <p class="number">7</p>
                                <p class="txt">失联设备</p>
                            </div>
                        </div>
                    </div>
                    <div class="eqItem fl" @click="isChange(3)">
                        <div class="item clearfix active" :class="{item3: isShow === 3}">
                            <div class="Hleft">
                                <img src="../../../assets/images/imp/warn02.png" alt="">
                            </div>
                            <div class="Hright">
                                <p class="number">7</p>
                                <p class="txt">失联设备</p>
                            </div>
                        </div>
                    </div>
                    <div class="eqItem fl" @click="isChange(4)">
                        <div class="item clearfix active" :class="{item4: isShow === 4}">
                            <div class="Hleft">
                                <img src="../../../assets/images/imp/undeal.png" alt="">
                            </div>
                            <div class="Hright">
                                <p class="number">7</p>
                                <p class="txt">失联设备</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="main-wraper">
            <div class="main-header">设备运行信息</div>
            <div class="main-content">
                <el-table :data="equipList" border style="width: 100%">
                    <el-table-column type="index" width="50">
                    </el-table-column>
                    <el-table-column prop="equipType" label="设备类型" width="200">
                    </el-table-column>
                    <el-table-column prop="equipBrand" label="设备品牌" width="160">
                    </el-table-column>
                    <el-table-column prop="equipId" label="设备编号" width="240">
                    </el-table-column>
                    <el-table-column prop="equipAddress" label="安装位置" min-width="260">
                    </el-table-column>
                    <el-table-column prop="equipState" :formatter="formatterColumn" label="运行状态" width="160">
                    </el-table-column>
                    <el-table-column prop="occurerTime" label="采集时间" width="240">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="150">
                        <template slot-scope="scope">
                            <el-button type="success" size="mini" @click="showInfo(scope.$index,scope.row)">详 情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <!-- table--dialog -->
        <el-dialog title="设备详情" :visible.sync="dialogFormVisible" :close-on-click-modal=false @closed="endDialog" custom-class="init-form">
            <el-form :model="detailForm" :label-position="labelPosition" label-width="80px">
                <div class="info-title">设备信息</div>
                <el-row>
                    <el-col :span="14">
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="设备编号">
                                    <span class="input-info">{{detailForm.equipId}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="设备别名">
                                    <span class="input-info">{{detailForm.equipName}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="设备类型">
                                    <span class="input-info">{{detailForm.equipStype}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="设备品牌">
                                    <span class="input-info">{{detailForm.equipBrand}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="设备型号">
                                    <span class="input-info">{{detailForm.equipModel}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="安装日期">
                                    <span class="input-info">{{detailForm.installDate}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="区">
                                    <span class="input-info">{{detailForm.equipArea}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="街道/镇">
                                    <span class="input-info">{{detailForm.equipStreet}}</span>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="村/居">
                                    <span class="input-info">{{detailForm.equipVillage}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="8">
                                <el-form-item label="社区名称">
                                    <span class="input-info">{{detailForm.communityName}}</span>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                    <!-- @ready="initPosition"  -->
                    <el-col :span="10">
                        <el-form-item label="地图位置">
                            <baidu-map class="detail-map" 
                            :scroll-wheel-zoom="true"
                            :center="showPosition"
                            :zoom="16">
                                <bm-marker :position="showPosition"
                                    @click="infoWindowOpen" :icon="{url: '../../../../static/imp/img/mapPointB.png', size: {width: 30, height: 30}}">
                                    <bm-info-window :show="showMap" @close="infoWindowClose" @open="infoWindowOpen">
                                        <div class="lineHeight">{{detailForm.equipName}}</div>
                                        <div class="lineHeight">{{detailForm.equipState}}</div>
                                        <div class="lineHeight">{{detailForm.equipAddress}}</div>
                                    </bm-info-window>
                                </bm-marker>
                            </baidu-map>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="info-title">运行状态</div>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="设备状态">
                            <span class="input-info">{{detailForm.equipState}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="设备电量">
                            <span class="input-info">{{detailForm.equipElectric}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="设备信号">
                            <span class="input-info">{{detailForm.equipSignal}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                    </el-col>
                </el-row>
                <div class="info-title">安装信息</div>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="服务商">
                            <span class="input-info">{{detailForm.serviceProvider}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系电话">
                            <span class="input-info">{{detailForm.servicePhone}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="保修期">
                            <span class="input-info">{{detailForm.defectsPeriod}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="厂商编号">
                            <span class="input-info">{{detailForm.manuNumber}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="服务号">
                            <span class="input-info">{{detailForm.serviceNumber}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="序列号">
                            <span class="input-info">{{detailForm.serialNumber}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="经度">
                            <span class="input-info">{{detailForm.equipLng}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="纬度">
                            <span class="input-info">{{detailForm.equipLat}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <el-form-item label="位置描述">
                            <span class="input-info">{{detailForm.equipHeight}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="位置描述">
                            <span class="input-info">{{detailForm.equipAddress}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="安装目的">
                            <span class="input-info">{{detailForm.InstallPurposes}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="设备照片">
                            <span class="input-info">{{detailForm.equipImg}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
                <!--{{detailForm}}-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import { apiGet } from '../../../api/api'
    export default {
        name: "equipMonitoring",
        data() {
            return {
                isActive: true,
                dialogFormVisible: false,
                labelPosition: 'top',
                equipList: [],
                detailForm: {},
                showPosition: {lng: '', lat: ''},
                equipItem:[
                    {
                        id:'01',
                        data:[
                            {id: 'S01',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS11.png'},
                            {id: 'S02',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS10.png'},
                            {id: 'S03',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS12.png'},
                            {id: 'S04',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS09.png'},
                            {id: 'S11',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS11.png'},
                            {id: 'S12',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS10.png'},
                            {id: 'S13',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS12.png'},
                            {id: 'S14',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS09.png'},
                            {id: 'S21',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS11.png'},
                            {id: 'S22',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS10.png'},
                            {id: 'S23',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS12.png'},
                            {id: 'S24',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS09.png'},
                            {id: 'S31',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS11.png'},
                            {id: 'S32',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS10.png'},
                            {id: 'S33',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS12.png'},
                            {id: 'S34',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS09.png'}
                        ]},
                    {
                        id:'02',
                        data:[
                            {id: 'S05',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS11.png'},
                            {id: 'S06',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS10.png'},
                            {id: 'S07',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS12.png'},
                            {id: 'S08',name:'智能烟感',imgUrl:'../../../assets/images/imp/equipment/listS09.png'}
                        ]}
                ],
                isShow: 1,
                showEquip: 1,
                showMap: false,
                mapIcon: '',
                params: {
                    equipType: '',
                    eventType: ''
                },
                setTimeOut: null
            }
        },
        created() {
            this.getEquip();
        },
        methods: {
            isEquipChange(num) {
                this.showEquip = num;
            },
            isChange(num) {
                this.isShow = num;
                console.log(num)
            },
            initPosition({BMap, map}) {
                // let _this = this;
                // setTimeout( ()=>{
                //     this.$nextTick(() => {
                //         _this.showPosition.lng = _this.detailForm.equipLng;
                //         _this.showPosition.lat = _this.detailForm.equipLat;
                //         _this.mapIcon = '../../../../static/imp/img/mapPointB.png';
                //         _this.infoWindowOpen();
                //     })
                // },500)
            },
            closeDialog(){
                this.dialogFormVisible = false;
            },
            endDialog() {  // dialog关闭动画后的回调
                this.showPosition.lng = '';
                this.showPosition.lat = '';
                clearInterval(this.setTimeOut)
            },
            showInfo(idx, row) {
                this.dialogFormVisible = true;
                this.detailForm = row;

                let _this = this;
                this.setTimeOut = setTimeout( ()=>{
                        _this.showPosition.lng = row.equipLng;
                        _this.showPosition.lat = row.equipLat;
                        _this.showMap = true;
                        // _this.mapIcon = '../../../../static/imp/img/mapPointB.png';
                },300)
            },
            formatterColumn(row) {
                switch (row.equipState) {
                    case '0':
                        return '正常';
                        break;
                    case '1':
                        return '失联';
                        break;
                    case '2':
                        return '警告';
                        break;
                    default:
                        return '未知';
                }
            },
            getEquip(params) {
                let url = '/api/mock/trueExam.do?id=153785618160312000457';
                apiGet(this, url, params).then((res) => {
                    // console.log(res.data)
                    this.equipList = res.data;
                })
            },
            infoWindowClose() {
                this.showMap = false
            },
            infoWindowOpen() {
                this.showMap = true
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail-map {
        width: 100%;
        height: 230px;
    }

    div {
        .header {
            background-color: #fff;
            padding: 10px 0;

            .item {
                width: 140px;
                height: 90px;
                background-color: #c8c8c8;
                border-radius: 5px;
                text-align: center;
                color: #fff;
                margin-right: 18px;
                margin-top: 10px;
                cursor: pointer;

                p.img {
                    display: inline-block;
                    width: 40px;
                    height: 45px;
                    margin-top: 12px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                p.txt {
                    margin-top: 4px;
                    font-size: 14px;
                }
            }

            .item.active {
                background-color: #f0ad4e;
            }
        }

        /*设备列表*/
        .equip-list {
            .eqItem {
                width: 25%;
                height: 130px;
                cursor: pointer;
                text-align: center;
                padding: 0 10px;

                .item {
                    border-radius: 5px;

                    .Hleft {
                        width: 50%;
                        float: left;
                        text-align: center;
                        line-height: 130px;

                        img {
                            width: 110px;
                        }
                    }

                    .Hright {
                        margin-top: 36px;
                        font-size: 18px;
                        width: 50%;
                        float: left;
                        color: #fff;
                    }
                }

                .item.item1 {
                    background-color: #3399ff;
                }

                .item.item2 {
                    background-color: #33cc00;
                }

                .item.item3 {
                    background-color: #ffcc00;
                }

                .item.item4 {
                    background-color: #cc3300;
                }

                .active {
                    background-color: #ddd;
                }
            }
        }
    }
</style>