<template>
    <section>
        <div class="main-wraper">
            <div class="main-header">组织信息表</div>
            <div class="main-content">
                <el-form :model="orgForm" ref="orgForm">
                    <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="所属区" prop="areaValue">
                            <el-select v-model="orgForm.areaValue" placeholder="请选择" clearable style="width: 100%">
                                <el-option v-for="item in orgArea" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="所属街道" prop="streetValue">
                            <el-select v-model="orgForm.streetValue" clearable placeholder="请选择" style="width: 100%">
                                <el-option v-for="item in orgStreet" :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系人" prop="orgPeople">
                            <el-input v-model="orgForm.orgPeople" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="联系电话" prop="orgPhone">
                            <el-input v-model="orgForm.orgPhone" clearable></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="22" style="margin-top: 15px;">
                        <el-form-item class="textRight">
                            <el-button type="danger" @click="resetForm('orgForm')">重置</el-button>
                            <el-button type="warning" @click="getOrgList">查询</el-button>
                        </el-form-item>
                    </el-col>
                    </el-row>
                </el-form>
            </div>
        </div>

        <div class="main-wraper">
            <div class="main-header">表信息</div>
            <div class="main-content">
                <!--列表-->
                <el-table :data="orgList" highlight-current-row border>
                    <el-table-column type="index" width="70" label="序号" align="center"></el-table-column>
                    <el-table-column prop="orgArea" label="所属区" min-width="150" align="center" sortable></el-table-column>
                    <el-table-column prop="orgStreet" label="所属街道" width="180" align="center" sortable></el-table-column>
                    <el-table-column prop="residenceName" label="居委名称" width="180" align="center" sortable></el-table-column>
                    <el-table-column prop="communityName" label="社区名称" width="180" align="center" sortable></el-table-column>
                    <el-table-column prop="connectName" label="联系人" min-width="120" align="center" sortable></el-table-column>
                    <el-table-column prop="connectPhone" label="联系电话" width="150" align="center" sortable></el-table-column>
                    <el-table-column prop="connectAddress" label="联系地址" width="180" align="center" sortable></el-table-column>
                    <el-table-column prop="orgState" label="状态" width="100" align="center" sortable></el-table-column>
                    <el-table-column prop="creationTime" label="创建时间" min-width="160" align="center" sortable></el-table-column>
                    <el-table-column label="操作" width="120" align="center">
                        <template slot-scope="scope">
                            <el-dropdown trigger="click">
                                <el-button type="success" size="small">
                                    请选择<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <el-button type="text" @click="handleOpen(scope.$index,scope.row)">开通
                                        </el-button>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <el-button type="text" @click="handleDetail(scope.$index,scope.row)">详情
                                        </el-button>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                    </el-table-column>
                </el-table>
                <!--分页-->
                <div class="block">
                    <el-row>
                        <el-col :span="10" :offset="14">
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="currentPage"
                                    :page-sizes="[10, 20]"
                                    :page-size="10"
                                    layout="total, sizes, prev, pager, next, jumper"
                                    :total="total">
                            </el-pagination>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <el-dialog title="详情" custom-class="init-form" :visible.sync="orgDialogVisible" width="36%">
                <el-form label-position="left" :model="orgDetailForm">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="社区名称：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.communityName}}</span>
                                <!--<el-input v-model="orgDetailForm.communityName" autocomplete="off"></el-input>-->
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="所属机构：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.affiliationName}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="固定电话：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.fixedPhone}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系人：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.connectName}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="联系电话：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.connectPhone}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="地址：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.connectAddress}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="电子邮件：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.orgEmail}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="备注：" label-width="70">
                                <span class="input-info2">{{orgDetailForm.orgRemarks}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="orgDialogVisible = false" type="warning">关 闭</el-button>
                    <!--<el-button type="primary" @click="orgDialogVisible = false">确 定</el-button>-->
                </div>
            </el-dialog>
        </div>
    </section>
</template>

<script>
    export default {
        name: "functionalOpening",
        data() {
            return {
                orgForm:{
                    areaValue:'',
                    streetValue:'',
                    orgPeople:'',
                    orgPhone:''
                },
                orgArea: [{
                    value: '1',
                    label: '重要'
                }, {
                    value: '0',
                    label: '普通'
                }],
                orgStreet:[
                    {
                        value: '1',
                        label: '开启'
                    }, {
                        value: '2',
                        label: '关闭'
                    }],
                orgList:[
                    {
                        "orgId":1,
                        "orgArea":"宝山区",
                        "orgStreet":"南桥镇",
                        "communityName":"社区名称",
                        "residenceName":"居委名称",
                        "connectName":"联系人",
                        "connectPhone":"联系电话",
                        "connectAddress":"联系地址",
                        "fixedPhone":"固定电话",
                        "orgState":"状态",
                        "creationTime":"创建时间",
                        "affiliationName":"所属机构",
                        "orgEmail":"电子邮箱",
                        "orgRemarks":"备注"
                    }
                ],
                orgDialogVisible: false,
                orgDetailForm: {},
                currentPage: 1,
                total: 42
            }
        },
        methods: {
            resetForm(formName) {  // 重置
                this.$refs[formName].resetFields();
            },
            getOrgList() {   // 查询
                console.log(this.orgForm)
            },
            handleSizeChange(){},
            handleCurrentChange(){},
            handleOpen(){
                    this.$confirm('您将此账号功能开通?', '确认', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '账号开通成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'warning',
                            message: '已取消开通'
                        });
                    })
            },
            handleDetail(idnex, row){
                this.orgDialogVisible = true;
                this.orgDetailForm = row;
            }
        }

    }
</script>

<style scoped>

</style>