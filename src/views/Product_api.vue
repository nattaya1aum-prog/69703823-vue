<template>
  <!-- Container หลัก -->
  <div class="container my-5">
    <div class="row">
      <!-- ใช้ v-for เพื่อวนลูปแสดงสินค้าแต่ละรายการ -->
      <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <!-- แสดงรูปสินค้า -->
          <img
            :src="product.thumbnail"
            width="100"
            class="card-img-top"
            alt="Product Image"
            style="object-fit: contain; width: 100%; height: 200px"
          />
          <div class="card-body">
            <!-- แสดงชื่อสินค้า -->
            <h5 class="card-title">{{ product.title }}</h5>
          </div>
          <div class="card-footer">
            <!-- แสดงราคาสินค้า -->
            <small class="text-muted">Price: ${{ product.price }}</small>
            &nbsp;
            <!-- ปุ่มสำหรับเพิ่มสินค้า -->
            <button type="button" class="btn btn-outline-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
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
