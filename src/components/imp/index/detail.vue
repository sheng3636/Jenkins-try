<template>
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
                        <el-form-item label="名称">
                            <span class="input-info">{{detailForm.communityName}}</span>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="10">
                <el-form-item label="地图位置">
                    <!-- <div class="detail-map" id="detailMap"></div> -->
                    <baidu-map class="detail-map" :center="{lng: detailForm.equipLng, lat: detailForm.equipLat}" :scroll-wheel-zoom="true" :zoom="17">
                        <bm-marker :position="{lng: detailForm.equipLng, lat: detailForm.equipLat}" @click="infoWindowOpen" :icon="{url: '../../../../static/imp/img/mapPointB.png', size: {width: 30, height: 30}}">
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
                    <span class="input-info">{{detailForm.ServiceProvider}}</span>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="联系电话">
                    <span class="input-info">{{detailForm.ServicePhone}}</span>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="保修期">
                    <span class="input-info">{{detailForm.defectsPeriod}}</span>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="厂商编号">
                    <span class="input-info">{{detailForm.ManuNumber}}</span>
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
</template>

<script>
    export default {
        name: "detail",
        data() {
            return {
                labelPosition:'top',
                showMap: true
            }
        },
        props:{
            detailForm: {
                type: Object,
                default: function() {
                    return {}
                }
            }
        },
        mounted() {},
        updated() {},
        methods: {
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
    .detail-map {
        width: 100%;
        height: 225px;
    }
</style>