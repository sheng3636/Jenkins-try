<template>
<div>
  <div class="main-wraper">
    <div class="main-header">表单样式—按钮</div>
    <div class="main-content">
      <el-button type="text" size="medium" style="color: #333;">普通按钮</el-button>
      <table class="el-table el-table__body" border >
        <thead>
        <tr>
          <th>type="primary" size="medium"</th>
          <th>type="success" size="medium"</th>
          <th>type="warning" size="medium"</th>
          <th>type="danger" size="medium"</th>
          <th>type="default" size="medium"</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <el-button type="primary" size="medium" v-has="url">刷 新</el-button>
          </td>
          <td>
            <el-button type="success" size="medium">保 存</el-button>
          </td>
          <td>
            <el-button type="warning" size="medium">查 询</el-button>
          </td>
          <td>
            <el-button type="danger" size="medium">删 除</el-button>
          </td>
          <td>
            <el-button type="default" size="medium">关 闭</el-button>
          </td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" size="medium">浏 览</el-button>
          </td>
          <td>
            <el-button type="success" size="medium">暂 存</el-button>
          </td>
          <td>
            <el-button type="warning" size="medium">导 入</el-button>
          </td>
          <td>
            <el-button type="danger" size="medium">重 置</el-button>
          </td>
          <td>
            <el-button type="default" size="medium" >取 消</el-button>
          </td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" size="medium">确 定</el-button>
          </td>
          <td>
            <el-button type="success" size="medium">提 交</el-button>
          </td>
          <td>
            <el-button type="warning" size="medium">编 辑</el-button>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" size="medium">下一步</el-button>
          </td>
          <td>
            <el-button type="success" size="medium">详 情</el-button>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" size="medium">模板下载</el-button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <el-button type="primary" size="medium">通讯测试</el-button>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>

      </table>
      <el-button type="text" size="medium" style="color: #333;">表格按钮</el-button>
      <table class="el-table el-table__body" border >
        <thead>
        <tr>
          <th>type="primary" size="mini"</th>
          <th>type="success" size="mini"</th>
          <th>type="warning" size="mini"</th>
          <th>type="danger" size="mini"</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <el-button type="primary" size="mini">加入任务单</el-button>
          </td>
          <td>
            <el-button type="success" size="mini">新 增</el-button>
          </td>
          <td>
            <el-button type="warning" size="mini">导 出</el-button>
          </td>
          <td>
            <el-button type="danger"  size="mini">删 除</el-button>
          </td>
        </tr>
        </tbody>

      </table>
      <el-button type="text" size="medium" style="color: #333;">表格-二级菜单</el-button>
      <el-table class="el-table el-table__body" border :data="btnData">
        <el-table-column prop="state" label="状态" width="180" sortable>
        </el-table-column>
        <el-table-column label="type='success' size='small'">
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <el-button type="success" size="small">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-button type="text" @click="handlemModify(scope.$index,scope.row)">修改用户
                  </el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button type="text" @click="handleProhibit(scope.$index,scope.row)">禁用账号
                  </el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button type="text" @click="handleDelete(scope.$index,scope.row)">删除用户
                  </el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button type="text" @click="handleReset(scope.$index,scope.row)">重置密码
                  </el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button type="text" @click="handleRoot(scope.$index,scope.row)">账号授权
                  </el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="main-content">
      <el-button type="text" size="medium" style="color: #333;">表单弹窗</el-button>
      <el-row>
        <el-col :span="24">
          <el-button type="success" size="medium" @click="modalDialog">打开dialog</el-button>
        </el-col>
      </el-row>
      <el-dialog title="表单弹窗" :visible.sync="addFormVisible" :close-on-click-modal="false" @closed="closed('addForm')">
        <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm"
                 :label-position="labelPosition" class=" demo-dynamic">
          <el-row>
            <el-col :span="12">
              <el-form-item label="部门" prop="department">
                <el-input v-model="addForm.department" disabled value=""></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="addForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="登录名" prop="loginName">
                <el-input v-model="addForm.loginName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="密码" prop="password">
                <el-input v-model="addForm.password" type="password"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <!--<el-form-item label="密码强度" prop="degree">-->
                               <!--<span v-model="addForm.degree" class="el-input__inner degree" aria-readonly="true">-->
                                   <!--<em :class="{strength_L:idShow_L}">弱</em><em :class="{strength_M:idShow_M}" >中</em><em :class="{strength_S:idShow_S}">强</em>-->
                               <!--</span>-->
              <!--</el-form-item>-->
            </el-col>
            <el-col :span="12">
              <el-form-item label="确认密码" prop="surePsd">
                <el-input v-model="addForm.surePsd" type="password"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="工号" prop="workName">
                <el-input v-model="addForm.workName"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="职务" prop="post">
                <el-input v-model="addForm.post"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item label="电子邮件" prop="email">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="电话号码" prop="telNumber">
                <el-input v-model="addForm.telNumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="remarks">
                <el-input type="textarea" v-model="addForm.remarks"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog__footer">
          <el-button type="success" @click.native="addSave('addForm')">保存</el-button>
          <el-button type="default" @click.native="addClose('addForm')" >关闭</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="main-content">
      <el-col :span="24">
       <span class="aaa">正常</span>
      </el-col>
    </div>
  </div>
</div>
</template>

<script>
  let data=[
      {
          state:'下拉菜单'
      },
  ]
    export default {
        data() {
            return {
                url:"/role/xx|get",
                btnData: data,
                align:'center',
                labelPosition:'top',
                addFormVisible:false,
                addForm:{

                },
                addFormRules:{

                }
            }
        },
        methods: {
            //修改用户
            handlemModify: function (index, row) {

            },
            //禁用账号
            handleProhibit: function (index, row) {
            },
            //删除账号
            handleDelete:function(index, row){
            },
            //重置密码
            handleReset:function(index, row){
            },
            //账号授权
            handleRoot:function(index, row){
            },
            closed:function (formName) {
                this.$refs[formName].resetFields()
                this.addFormVisible=false
            },
            addSave:function (formName) {
                this.$refs[formName].resetFields()
                this.addFormVisible=false
            },
            addClose:function (formName) {
                this.$refs[formName].resetFields()
                this.addFormVisible=false
            },
            modalDialog:function(){
              this.addFormVisible=true
            },
        }
    }

</script>
<style scoped lang="scss">
  table{
    border-collapse: collapse;
    border: 1px solid #ddd;
    text-align: center;
    th{
      border-bottom:1px solid #ddd ;
      border-right: 1px solid #ddd;
      text-align: center;
    }
    tr td{
      border-right: 1px solid #ddd;
    }
   tr:last-of-type td{
      border-bottom: none;
    }
    tr th:last-of-type,tr td:last-of-type{
      border-right: none;
    }
  }
  table:before{
    height: 0;
  }
  .aaa{
    background:#67c23a;
    padding: 5px 10px;
    animation: flash 2s infinite;
  }
</style>