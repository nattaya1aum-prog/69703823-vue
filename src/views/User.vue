<template>
    <div class="container mt-4">
      <!-- หัวข้อของตาราง -->
      <h2 class="mb-3">User List</h2>

      <!-- ตารางแสดงข้อมูลผู้ใช้ -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Street</th>
    
          </tr>
        </thead>
        <tbody>
          <!-- ใช้ v-for เพื่อวนลูปแสดงข้อมูลผู้ใช้แต่ละคน -->
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name}} </td>
            <td>{{ user.email }}</td> 
            <td>{{ user.address.city}}</td>
            <td>{{ user.address.street}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    // สร้างตัวแปร products เพื่อเก็บข้อมูลสินค้า
    const users = ref([]);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก Fake Store API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        users.value = await response.json();
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // เรียก fetchProducts เมื่อคอมโพเนนต์ถูกโหลด
    onMounted(fetchUsers);

    return {
      users, // ส่งออกตัวแปร products เพื่อใช้ใน Template
    };
  },
};
</script>

