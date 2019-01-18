<template>
    <div>
        <div class="main-wraper">
            <div class="main-header">设备运行信息</div>
            <div class="main-content">
                <div class="equip-list clearfix">
                    <div class="eqItem fl" @click="isChange(1)">
                        <div class="item active clearfix" :class="{item1: isShow === 1}">
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
                        <div class="item active clearfix" :class="{item2: isShow === 2}">
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
        <el-collapse accordion class="main-wraper">
            <el-collapse-item>
                <template slot="title">
                    <div class="main-header">事件筛选</div>
                </template>
                <div class="main-content">
                   <el-row>
                       <el-col :span="20">
                           <el-form label-position="top" label-width="80px" :model="checkForm">
                               <el-form-item label="关键字查询：">
                                   <el-input v-model="checkForm.keyword"></el-input>
                               </el-form-item>
                           </el-form>
                           <el-row style="padding-left: 15px;">
                               <el-checkbox-group v-model="checkForm.checkList">
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="井盖异常事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="人群聚集事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="供水水质异常事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="垃圾堆放事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="烟感异常事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="燃气泄漏事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="违停事件"></el-checkbox>
                                   </el-col>
                                   <el-col :span="6" class="mt15">
                                       <el-checkbox label="陌生人员事件"></el-checkbox>
                                   </el-col>
                               </el-checkbox-group>
                           </el-row>
                       </el-col>
                   </el-row>
                    <div class="footer-btn">
                        <el-button type="warning" @click="getCheckList">查 询</el-button>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>

        <div class="main-wraper">
            <div class="main-header">事件列表</div>
            <div class="main-content">
                <!--列表-->
                <el-table
                        :data="eventList"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="eventId"
                            label="事件ID"
                            width="220">
                    </el-table-column>
                    <el-table-column
                            prop="eventName"
                            label="事件名称"
                            width="240">
                    </el-table-column>
                    <el-table-column
                            prop="equipName"
                            label="关联设备"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="equipAddress"
                            min-width="260"
                            label="安装位置">
                    </el-table-column>
                    <el-table-column
                            prop="eventOccurTime" 
                            width="220"
                            label="发现时间">
                    </el-table-column>
                    <el-table-column
                            prop="equipState"
                            width="160"
                            label="状态">
                    </el-table-column>
                      <el-table-column
                            prop="eventGrade"
                            width="150"
                            label="等级">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button @click="checkDetail(scope.row)" type="success" size="small">详 情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <div class="pagination">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-sizes="[10, 15, 20, 50]"
                            :page-size="pageNum"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </div>
            </div>
        </div>
        <!--查看详情模态框-->

    </div>
</template>

<script>
    import { apiGet } from '../../../api/api'
    export default {
        name: "equipMonitoring",
        data() {
            return {
                isActive: false,
                checkForm: {
                    keyword: '',
                    checkList:['燃气泄漏事件']
                },
                eventList: [],
                detailModalVisible: false,
                total: 22,
                pageNum: 10,
                currentPage: 1,
                isShow: 1,
                eventId: ''
            }
        },
        created() {
            this.getEventList();
        },
        methods: {
            checkDetail(row) {
                this.eventId = row.eventId;
                this.$router.push({path:'/imp/eventMonitoring/eventInfo',query:{id:row.eventId}})
            },
            isChange(num) {
                this.isShow = num;
            },
            handleCurrentChange() {},
            handleSizeChange() {},
            getCheckList() {  // 条件筛选
                let url = '/api/mock/trueExam.do?id=153803450759312000722';
                apiGet(this, url, this.checkForm).then((res) => {
                    this.eventList = res.data;
                })
            },
            getEventList(params) {  // 获取列表
                let url = '/api/mock/trueExam.do?id=153785524976912000454';
                apiGet(this, url, params).then((res) => {
                    // console.log(res.data)
                    this.eventList = res.data;
                    console.log(this.eventList)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .cur {background-color: red}
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
                    width: 40px;height: 40px;
                    margin-top: 16px;
                    img { width: 100%;}
                }
                p.txt {margin-top: 2px;}
            }
            .item.active {background-color: #f0ad4e;}
        }
        .footer-btn {
            margin-top: 8px;
            text-align: right;
            padding-right: 100px;
        }
        .mt15 {margin-top: 12px;}
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
                        width: 50%; float: left;
                        text-align: center;
                        line-height: 130px;
                        img { width: 110px; }
                    }
                    .Hright {
                        margin-top: 36px;
                        font-size: 18px;
                        width: 50%; float: left;
                        color: #fff;
                    }
                }
                .item.item1 {background-color: #3399ff;}
                .item.item2 {background-color: #33cc00;}
                .item.item3 {background-color: #ffcc00;}
                .item.item4 {background-color: #cc3300;}
                .active {background-color: #ddd;}
            }
        }

        .pagination {
            margin: 15px 0;
            .el-pagination{
                float: right;
            }
        }
    }
</style>