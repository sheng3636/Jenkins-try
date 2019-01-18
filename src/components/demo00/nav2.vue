<template>
  <div class="tree">
    <!--  @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter"
      @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd"  @node-drop="handleDrop" -->
  
    <el-tree :data="data6" node-key="id" default-expand-all @node-drop="handleDrop"
      draggable :allow-drop="allowDrop">
    </el-tree>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data6: [{
          id: 1,
          label: '一级 1',
          level: '1',  // 一级
          children: [{
            id: 4,
            label: '二级 1-1',
          level: '2',  // 二级
            children: [{
              id: 9,
              label: '三级 1-1-1',
          level: '2',  // 三级
            }, {
              id: 10,
              label: '三级 1-1-2',
          level: '2',  // 三级
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          level: '1',  // 一级
          children: [{
            id: 5,
            label: '二级 2-1',
          level: '2',  // 二级
          }, {
            id: 6,
            label: '二级 2-2',
          level: '2',  // 二级
          }]
        }, {
          id: 3,
          label: '一级 3',
          level: '1',  // 一级
          children: [{
            id: 7,
            label: '二级 3-1',
          level: '2',  // 二级
          }, {
            id: 8,
            label: '二级 3-2',
          level: '2',  // 二级
            children: [{
             id: 11,
              label: '三级 3-2-1',
          level: '2',  // 三级
            }, {
              id: 12,
              label: '三级 3-2-2',
          level: '2',  // 三级
            }, {
              id: 13,
              label: '三级 3-2-3',
          level: '2',  // 三级
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) { //节点被关闭时触发的事件
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {  //节点被关闭时触发的事件
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {  //节点开始拖拽时触发的事件
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {  //节点被关闭时触发的事件
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {  //节点被关闭时触发的事件
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {  //节点被关闭时触发的事件
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {  //拖拽时判定目标节点能否被放置
        // if (dropNode.data.label === '二级 3-2') {
        //   return type !== 'inner';
        // } else {
        //   return true;
        // }
  
        if(draggingNode.data.level==1&&dropNode.data.level==1){
                 if(draggingNode.parent.id == dropNode.parent.id){
        
                    return type == 'next' || type == 'prev' ;
                }else{
                    //一级分类父级不同不做拖拽
         
                }
            }
            if(draggingNode.data.level==2&&dropNode.data.level==2){
                if(draggingNode.parent.id == dropNode.parent.id){
                    return type == 'prev' || type == 'next';
                }else{
                    //二级分类父级不同不做拖拽
                this.$message({
                message: '只允许同级菜单内排序',
                type: 'warning'
              });
                }
            }
      },
      allowDrag(draggingNode) {   //判断节点能否被拖拽
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      }
    }
  }

</script>
