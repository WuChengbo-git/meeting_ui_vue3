<template>
  <div>
    <meeting-time-line />  <!-- 使用组件 -->
  </div>
</template>

<script>
  import MeetingTimeLine from '@/components/MeetingTimeLine'

  export default {
    components: {
      MeetingTimeLine   // 注册组件
    }
  }
</script>
