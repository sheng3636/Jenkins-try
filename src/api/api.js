import Axios from 'axios';

// 封装axios 是用来做ajax请求
// axios.defaults.baseURL = '/api';
const host = process.env.NODE_ENV === 'development' ? '/api' : 'http://172.31.27.15:8080' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
const axios = Axios.create({
  baseURL: host
})
console.log(process.env.NODE_ENV)

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let base = 'http://127.0.0.1:8080';

//参数管理模块
export const getListPage = '/system/parameterInfo/list';
export const addPara = '/system/parameterInfo/add';
export const editPara = '/system/parameterInfo/edit';
export const removePara = '/system/parameterInfo/delete';

//供应商管理模块
export const getSupplierListPage = '/supplier/list';
export const addSupplier = '/supplier/add';
export const editSupplier = '/supplier/edit';
export const removeSupplier = '/supplier/delete';

//设备管理模块
export const getEquipmentsListPage = '/omp/equipmentInfo';
export const addEquipment = '/omp/equipmentInfo';
export const editEquipment = '/omp/equipmentInfo';
export const removeEquipment = '/omp/equipmentInfo';
export const downloadTemplate = `${base}/omp/equipmentInfo/downloadTemplate`;
export const uploadExcel = '/omp/equipmentInfo/upload';
export const equipmentSuppliers = '/omp/equipmentInfo/getSuppliers';
export const equipmentType = '/omp/equipmentInfo/getEquipmentType';
export const equipmentState = '/omp/equipmentInfo/getEquipmentState';

//街道管理
export const orgList = '/api/mock/trueExam.do?id=153717178211312000074';
export const getOrgByLevel = '/api/mock/trueExam.do?id=153724640478312000120';
export const addOrg = '/api/mock/trueExam.do?id=153724640478312000120';
export const orgDetail = '/api/mock/trueExam.do?id=153717296585512000075';
export const updateOrg = '/api/mock/trueExam.do?id=153717296585512000075';
export const getDeptAll = '/omp/equipmentInfo/getDeptAll';

//社区管理
export const communityList = '/api/mock/trueExam.do?id=153724529253412000118';

//imp 规则配置
export const equipmentTypeImp = '/api/mock/trueExam.do?id=153723681045412000098';
export const equipmentImp = '/api/mock/trueExam.do?id=153716397566512000037';

//imp 事件配置
export const addEventConfigUrl = '/api/mock/trueExam.do?id=153811707745712000802';
export const updateEventConfigUrl = '/api/mock/trueExam.do?id=153801007136712000642';
export const updateEventConfigStateUrl = '/api/mock/trueExam.do?id=153819970724912000883';
export const deleteEventConfigUrl = '/api/mock/trueExam.do?id=153801035115512000647';
export const eventConfigDataUrl = '/api/mock/trueExam.do?id=153725689504312000163';
export const equipmentDataUrl = '/api/mock/trueExam.do?id=153733635339712000218';
export const principalDataUrl = '/api/mock/trueExam.do?id=153733888526112000231';
export const eventConfigDetailUrl = '/api/mock/trueExam.do?id=153788252312812000539';

//imp 事件配置 （联调）
// export const addEventConfigUrl = '/imp/eventConfig';
// export const updateEventConfigUrl = '/imp/eventConfig';
// export const updateEventConfigStateUrl = '/imp/eventConfig/state';
// export const deleteEventConfigUrl = '/imp/eventConfig';
// export const eventConfigDataUrl = '/imp/eventConfig';
// export const equipmentDataUrl = '/imp/eventConfig/equipmentType	';
// export const principalDataUrl = '/imp/eventConfig/personInfo';
// export const eventConfigDetailUrl = '/imp/eventConfig/detail';

// imp 社区通知模块
export const searchInfoImp = '/api/mock/trueExam.do?id=153742690814412000298';
export const addCommunity = '/api/mock/trueExam.do?id=153749666465112000349';
export const updateInfo = '/api/mock/trueExam.do?id=153794716878612000591';
export const serchIdDetails = '/api/mock/trueExam.do?id=153794817627412000596';
export const deleteCommunity = '/api/mock/trueExam.do?id=153796562470012000627';

//菜单权限
export const plantform = '/api/mock/trueExam.do?id=153811216862812000772';
export const queryTreeByplatformId = '/api/mock/trueExam.do?id=153811265237112000776';
export const menuAdd = '/api/mock/trueExam.do?id=153811334633112000777';
export const menuDetailById = '/api/mock/trueExam.do?id=153811574087012000783';
export const menuEdit = '/api/mock/trueExam.do?id=153811391720312000778';
export const menuDelete = '/api/mock/trueExam.do?id=153811594916812000785';
export const auth = '/api/mock/trueExam.do?id=153811772660012000806';
export const tables = '/api/mock/trueExam.do?id=153811930679512000820';
export const authAdd = '/api/mock/trueExam.do?id=153811869819712000815';
export const authEdit = '/api/mock/trueExam.do?id=153811881971012000818';
export const authDelete = '/api/mock/trueExam.do?id=153811889358612000819';

// omp 
export const getOrgsByPid = '';
export const deleteOrg = '';
export const communityEdit = '';
export const communityAdd = '';

export const selectOrgByLevel = '';
export const selectOrgByAreaId = '';


export const apiGet = (that, url, params) => {
    return new Promise((resolve, reject) => {
        that.listLoading = true;
        axios.get(url, {
            params: params
        }).then(res => {
            that.listLoading = false;
            resolve(res.data);
        }).catch(err => {
            that.listLoading = false;
            reject(err);
        })
    })
};

export const apiPost = (that, url, params) => {
    return new Promise((resolve, reject) => {
        that.$confirm('确认提交吗？', '提示', {}).then(() => {
            that.addLoading = true;
            axios.post(url, params).then(res => {
                that.editLoading = false;
                let message = res.data.message;
                that.$message({
                    message: message,
                    type: 'success'
                });
                resolve(res.data);
            }).catch(err => {
                that.editLoading = false;
                reject(err);
            })
        })
    })
};

export const apiPut = (that, url, params) => {
    return new Promise((resolve, reject) => {
        that.$confirm('确认提交吗？', '提示', {}).then(() => {
            that.editLoading = true;
            axios.put(url, params).then(res => {
                that.editLoading = false;
                let message = res.data.message;
                that.$message({
                    message: message,
                    type: 'success'
                });
                resolve(res.data);
            }).catch(err => {
                that.editLoading = false;
                reject(err);
            })
        })
    })
};
//公共修改状态方法
export const apiStatePut = (that, url, params, message) => {
    return new Promise((resolve, reject) => {
        that.$confirm(message, '提示', {}).then(() => {
            that.editLoading = true;
            axios.put(url, params).then(res => {
                that.editLoading = false;
                let message = res.data.message;
                that.$message({
                    message: message,
                    type: 'success'
                });
                resolve(res.data);
            }).catch(err => {
                that.editLoading = false;
                reject(err);
            })
        })
    })
};

export const apiDelete = (that, url, params) => {
    return new Promise((resolve, reject) => {
        that.$confirm('确认删除该记录吗?', '提示', {
            type: 'warning'
        }).then(() => {
            that.listLoading = true;
            axios.delete(url, {
                params: params
            }).then(res => {
                that.listLoading = false;
                // alert(res.data.code);
                let message = res.data.message;
                that.$message({
                    message: message,
                    type: 'success'
                });
                resolve(res.data);
            }).catch(err => {
                that.listLoading = false;
                reject(err);
            })
        }).catch(() => {

        });
    })
};

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //console.log(config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
