<template lang="">
    <div class="container text-center mt-5">
        <h3>ติดต่อเรา</h3>
        <h2>69703823</h2>
        <h2>Natthaya Jaengchut</h2>


    </div>
     <div class="container text-center pt-5">
    <!-- แสดงข้อความตามสถานะการเข้าสู่ระบบ -->
    <h1 v-if="isLoggedIn">ยินดีต้อนรับ!</h1> <!-- ถ้าเข้าสู่ระบบแล้ว -->
    <h1 v-else>กรุณาเข้าสู่ระบบ</h1> <!-- ถ้ายังไม่ได้เข้าสู่ระบบ -->
    
    <!-- ปุ่มสำหรับเข้าสู่ระบบหรือออกจากระบบ -->
    <button @click="toggleLogin">
      {{ isLoggedIn ? 'ออกจากระบบ' : 'เข้าสู่ระบบ' }} <!-- เปลี่ยนข้อความตามสถานะ -->
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: false, // ตัวแปรสำหรับเก็บสถานะการเข้าสู่ระบบ (ค่าเริ่มต้นเป็น false)
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn; // เปลี่ยนค่าของ isLoggedIn (true <-> false)
    },
  },
};
</script>

<style scoped>
    h3 {
        color: #2ee093;
        font-size: 20px;
    }
    
</style>

