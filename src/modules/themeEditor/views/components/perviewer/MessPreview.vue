<template>
  <SectionWrapper title="综合示例" :show-divider="false">
    <IntroBox
      content="以下示例结合element-plus的常用组件，用以展示修改主题后对应组件的变化效果"
      class="mt-space-xxs" />
    <div class="flex flex-col self-stretch flex-shrink-0">
      <MessPreviewSection title="按钮样式">
        <el-row class="mb-4">
          <el-button>Default</el-button>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button>
          <el-button type="info">Info</el-button>
          <el-button type="warning">Warning</el-button>
          <el-button type="danger">Danger</el-button>
        </el-row>
        <el-row class="mb-4">
          <el-button plain>Plain</el-button>
          <el-button type="primary" plain>Primary</el-button>
          <el-button type="success" plain>Success</el-button>
          <el-button type="info" plain>Info</el-button>
          <el-button type="warning" plain>Warning</el-button>
          <el-button type="danger" plain>Danger</el-button>
        </el-row>
        <el-row class="mb-4">
          <el-button round>Round</el-button>
          <el-button type="primary" round>Primary</el-button>
          <el-button type="success" round>Success</el-button>
          <el-button type="info" round>Info</el-button>
          <el-button type="warning" round>Warning</el-button>
          <el-button type="danger" round>Danger</el-button>
        </el-row>
        <el-row>
          <el-button circle><i class="i-mdi-circle" /></el-button>
          <el-button type="primary" circle><i class="i-mdi-home" /></el-button>
          <el-button type="success" circle><i class="i-mdi-check" /></el-button>
          <el-button type="info" circle><i class="i-mdi-book" /></el-button>
          <el-button type="warning" circle><i class="i-mdi-warning" /></el-button>
          <el-button type="danger" circle><i class="i-mdi-error" /></el-button>
        </el-row>
      </MessPreviewSection>

      <MessPreviewSection title="按钮禁用">
        <el-row class="mb-4">
          <el-button disabled>Default</el-button>
          <el-button type="primary" disabled>Primary</el-button>
          <el-button type="success" disabled>Success</el-button>
          <el-button type="info" disabled>Info</el-button>
          <el-button type="warning" disabled>Warning</el-button>
          <el-button type="danger" disabled>Danger</el-button>
        </el-row>
        <el-row>
          <el-button plain disabled>Plain</el-button>
          <el-button type="primary" plain disabled>Primary</el-button>
          <el-button type="success" plain disabled>Success</el-button>
          <el-button type="info" plain disabled>Info</el-button>
          <el-button type="warning" plain disabled>Warning</el-button>
          <el-button type="danger" plain disabled>Danger</el-button>
        </el-row>
      </MessPreviewSection>

      <MessPreviewSection title="文字按钮">
        <p class="text-size-extra-small">基础文字按钮</p>
        <div class="flex justify-start mb-4 flex-wrap gap-space-xxxs mt-space-xxs">
          <el-button v-for="button in buttons" :key="button.text" :type="button.type" text>
            {{ button.text }}
          </el-button>
        </div>
        <p class="text-size-extra-small">背景常驻</p>
        <div class="flex justify-start mb-4 flex-wrap gap-space-xxxs mt-space-xxs">
          <el-button v-for="button in buttons" :key="button.text" :type="button.type" text bg>
            {{ button.text }}
          </el-button>
        </div>
        <p class="text-size-extra-small">文字按钮禁用</p>
        <div class="flex justify-start mb-4 flex-wrap gap-space-xxxs mt-space-xxs">
          <el-button v-for="button in buttons" :key="button.text" :type="button.type" text disabled>
            {{ button.text }}
          </el-button>
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="按钮尺寸">
        <el-row>
          <el-button size="large">Large</el-button>
          <el-button>Default</el-button>
          <el-button size="small">Small</el-button>
          <el-button type="primary" size="large">Large</el-button>
          <el-button type="success">Default</el-button>
          <el-button type="danger" size="small">Small</el-button>
        </el-row>
      </MessPreviewSection>

      <MessPreviewSection title="按钮组">
        <div class="flex flex-row flex-wrap">
          <el-button-group>
            <el-button type="primary">
              <i class="i-mdi-chevron-left text-size-medium" />
              <span>Previous Page</span>
            </el-button>
            <el-button type="primary">
              <span>Next Page</span>
              <i class="i-mdi-chevron-right text-size-medium" />
            </el-button>
          </el-button-group>
          <el-button-group class="ml-4">
            <el-button type="info" circle><i class="i-mdi-book" /></el-button>
            <el-button type="warning" circle><i class="i-mdi-warning" /></el-button>
            <el-button type="danger" circle><i class="i-mdi-error" /></el-button>
          </el-button-group>
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="输入框">
        <el-input v-model="inputa" placeholder="基本输入框" class="mb-space-sm" />
        <el-input disabled placeholder="禁用状态输入框" class="mb-space-sm" />
        <el-input v-model="inputb" placeholder="一键清空输入框" class="mb-space-sm" clearable />
        <el-input
          v-model="inputc"
          type="password"
          placeholder="密码输入框"
          show-password
          class="mb-space-sm" />
        <el-input v-model="inputd" placeholder="输入框内前缀/后缀内容" class="mb-space-sm">
          <template #prefix><i class="i-mdi-account-cog text-size-lg" /></template>
          <template #suffix><i class="i-mdi-card-search text-size-lg" /></template>
        </el-input>
        <el-input v-model="input1" placeholder="输入框前置/后置内容" class="mb-space-sm">
          <template #prepend>Http://</template>
          <template #append>.com</template>
        </el-input>
        <el-input v-model="input2" placeholder="输入框前置下拉框，后置图标示例">
          <template #prepend>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option label="Restaurant" value="1" />
              <el-option label="Order No." value="2" />
              <el-option label="Tel" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button><i class="i-mdi-search" /></el-button>
          </template>
        </el-input>
      </MessPreviewSection>

      <MessPreviewSection title="数字输入框">
        <div class="flex flex-row items-center gap-space-xxs flex-wrap">
          <el-input-number v-model="num" :min="1" :max="10" />
          <el-input-number v-model="num" disabled :min="1" :max="10" />

          <el-input-number v-model="num" controls-position="right" :max="10" />
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="单选框">
        <div class="flex flex-col gap-space-xxs">
          <el-radio-group v-model="radio1">
            <el-radio label="1">Option 1</el-radio>
            <el-radio label="2">Option 2</el-radio>
          </el-radio-group>
          <el-radio-group v-model="radio1" disabled>
            <el-radio label="1">Option 1</el-radio>
            <el-radio label="2">Option 2</el-radio>
          </el-radio-group>
          <el-radio-group v-model="radio1">
            <el-radio label="1" border>Option 1</el-radio>
            <el-radio label="2" border>Option 2</el-radio>
          </el-radio-group>
          <el-radio-group v-model="radio2">
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
          <el-radio-group v-model="radio2" disabled>
            <el-radio-button label="New York" />
            <el-radio-button label="Washington" />
            <el-radio-button label="Los Angeles" />
            <el-radio-button label="Chicago" />
          </el-radio-group>
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="开关">
        <div class="flex flex-col gap-space-xxs">
          <el-switch v-model="switchVal" />
          <el-switch v-model="switchVal" disabled />
          <el-switch
            v-model="switchVal"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
          <el-switch v-model="switchVal" active-text="Pay by month" inactive-text="Pay by year" />
          <el-switch
            v-model="switchVal"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="Pay by month"
            inactive-text="Pay by year" />
          <el-switch v-model="switchVal" inline-prompt active-text="是" inactive-text="否" />
          <el-switch
            v-model="switchVal"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="Y"
            inactive-text="N" />
          <el-switch
            v-model="switchVal"
            width="60"
            inline-prompt
            active-text="超出省略"
            inactive-text="超出省略" />
          <el-switch
            v-model="switchVal"
            inline-prompt
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-text="完整展示多个内容"
            inactive-text="多个内容" />
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="表单示例">
        <FormPreview />
      </MessPreviewSection>

      <MessPreviewSection title="基础表格">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </MessPreviewSection>

      <MessPreviewSection title="带斑马线的表格">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </MessPreviewSection>

      <MessPreviewSection title="带边框的表格">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </MessPreviewSection>

      <MessPreviewSection title="弹窗">
        <div class="flex flex-row">
          <el-button @click="dialogVisible = true">点击打开弹窗</el-button>
        </div>

        <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
          <span>This is a message</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
          </template>
        </el-dialog>
      </MessPreviewSection>

      <MessPreviewSection title="消息提示">
        <div class="flex flex-row">
          <el-button :plain="true" @click="open2">success</el-button>
          <el-button :plain="true" @click="open3">warning</el-button>
          <el-button :plain="true" @click="open1">message</el-button>
          <el-button :plain="true" @click="open4">error</el-button>
        </div>
      </MessPreviewSection>

      <MessPreviewSection title="标签页">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
        <el-tabs type="border-card">
          <el-tab-pane label="User">User</el-tab-pane>
          <el-tab-pane label="Config">Config</el-tab-pane>
          <el-tab-pane label="Role">Role</el-tab-pane>
          <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs>
      </MessPreviewSection>

      <MessPreviewSection title="分页">
        <el-pagination layout="prev, pager, next" :total="1000" class="mb-space-xs" />
        <el-pagination background layout="prev, pager, next" :total="1000" class="mb-space-xs" />
        <el-pagination small layout="prev, pager, next" :total="50" class="mb-space-xs" />
        <el-pagination small background layout="prev, pager, next" :total="50" />
      </MessPreviewSection>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import SectionWrapper from '../SectionWrapper.vue';
  import IntroBox from './IntroBox.vue';
  import MessPreviewSection from './MessPreviewSection.vue';
  import FormPreview from './FormPreview.vue';
  import { ElMessageBox, ElMessage } from 'element-plus';
  import type { TabsPaneContext } from 'element-plus';

  const inputa = ref('');
  const inputb = ref('');
  const inputc = ref('');
  const inputd = ref('');

  const input1 = ref('');
  const input2 = ref('');
  const select = ref('');

  const num = ref(1);

  const radio1 = ref('1');
  const radio2 = ref('New York');

  const switchVal = ref(true);

  const dialogVisible = ref(false);

  const activeName = ref('first');

  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ] as const;

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ];

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };

  const open1 = () => {
    ElMessage('this is a message.');
  };
  const open2 = () => {
    ElMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
    });
  };
  const open3 = () => {
    ElMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
    });
  };
  const open4 = () => {
    ElMessage.error('Oops, this is a error message.');
  };

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
  };
</script>

<style lang="scss">
  .demo-tabs {
    @apply mb-space-sm;
    .el-tabs__header {
      &.is-top {
        margin: 0;
      }
    }
    .el-tabs__content {
      padding: 32px;
      font-size: 32px;
      font-weight: 600;
      color: #6b778c;
      background-color: var(--el-bg-color-page);
    }
  }
</style>
