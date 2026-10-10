<template>
  <!-- Container หลัก -->
  <div class="container my-5">

    <!-- หัวข้อ -->
    <h2 class="text-center mb-4">แสดงรายการสินค้า</h2>

    <!-- ปุ่มกดเพื่อดึงข้อมูลใหม่ -->
    <div class="text-center mb-3">
      <!-- @click = event เมื่อกดปุ่ม -->
      <button class="btn btn-primary" @click="fetchGold">
        🔄 อัปเดต
      </button>
    </div>

     <!-- ตารางแสดงข้อมูล -->
    <table class="table table-bordered table-striped text-center">

      <!-- ส่วนหัวตาราง -->
      <thead class="table-dark">
        <tr>
          <th>รหัสสินค้า</th>
          <th>รูปภาพ</th>
          <th>ชื่อสินค้า</th>
          <th>จำนวน</th>
          <th>ราคา</th>
        </tr>
      </thead>

      <!-- ส่วนข้อมูล -->
      <tbody>
        <!-- v-for ใช้วนลูปข้อมูลใน golds -->
        <tr v-for="item in products" :key="item.id">
          
          <!-- แสดงรหัสสินค้า -->
          <td>{{ item.id }}</td>

          <!-- แสดงรูปภาพ -->
          <td>
            <img 
            :src="item.thumbnail"  
            width="100" 
            class="card-img-top"
            alt="Product Image"
            style="object-fit: contain; width: 100%; height: 50px"
            />
          </td>

          <!-- แสดงชื่อสินค้า (สีเขียว) -->
          <td class="text-success text-start">
            {{ item.title }}
        </td>

          <!-- แสดงจำนวน -->
          <td>{{ item.stock }}</td>

          <!-- แสดงราคาขาย (สีแดง) -->
          <td class="text-danger">
            {{item.price }} บาท
          </td>

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
    const products = ref([]);

    // ฟังก์ชันดึงข้อมูลสินค้าจาก Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        products.value = data.products;
 
      
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // เรียก fetchProducts เมื่อคอมโพเนนต์ถูกโหลด
    onMounted(fetchProducts);

    return {
      products, // ส่งออกตัวแปร products เพื่อใช้ใน Template
    };
  },
};
</script>