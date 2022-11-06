<template>
  <div
    class="row justify-content-start"
    style="margin-top: 30px; margin-left: 25px"
  >
    <!-- COLUMN 1 -->
    <div class="col-md-3">
      <div class="container">
        <i class="fa-solid fa-circle-user fa-3x"></i>
        <div class="text">
          <h5>Meisya Puteri</h5>
          <p style="margin-top: -8px">Mitra 211511021</p>
        </div>
      </div>
    </div>

    <!-- COLUMN 2 -->
    <div class="col-md-3 justify-content-start">
      <div class="container ">
        <h4 style="font-weight: lighter">Pages / Menu</h4>
        <h5 style="margin-top: -6px; font-weight: bolder">Menu</h5>
      </div>
    </div>

    <!-- COLUMN 3 -->
    <div class="col-md-5 position-relative">
      <form
        class="d-sm-inline-flex position-absolute top-0 start-50"
        role="search"
      >
        <input
          class="form-control"
          id="icon"
          type="search"
          placeholder="Type here.."
          aria-label="Search"
        />
      </form>
    </div>
  </div>

  <!-- NEW LINE -->
  <br />
  <div class="row justify-content-start">
    <!-- COLUMN 1 -->
    <div class="col-md-3" >
      <!-- RESTAURANT -->
      <div class="card mx-5 my-2 w-55">
        <div
          class="container"
          style="background-color: #ffffff; border-radius: 10px"
        >
          <ul class="list-group list-group-flush" style="background-color: #FFFFFFF">
            <li class="list-group-item" style="background-color: #FFFFFFF">
              <img
                class="img-fluid"
                id="img-1"
                src="../assets/Rectangle_blue.svg"
              />
              <img
                class="img-fluid"
                id="img-3"
                src="../assets/Vector_1.svg"
                style="background-color: #59cfd7"
              />
              <a href="#" class="text-dark" style="text-decoration: none ; background-color: #FFFFFFF"
                >Carts</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- ADD MITRA -->
      <div class="card mx-5 my-3 w-55">
        <div
          class="container"
          style="background-color: #ffffff; border-radius: 10px"
        >
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style="background-color: #FFFFFFf">
              <img
                class="img-fluid"
                id="img-1"
                src="../assets/Rectangle_blue.svg"
              />
              <img
                class="img-fluid"
                id="img-2"
                src="../assets/plus.svg"
                style="background-color: #59cfd7"
              />
              <a href="#" class="text-dark" style="text-decoration: none"
                >Add Mitra</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- LOGOUT -->
      <div class="card mx-5 my-3 w-55">
        <div
          class="container"
          style="background-color: #ffffff; border-radius: 10px"
        >
          <ul class="list-group list-group-flush" style="background-color: #FFFFFFf">
            <li class="list-group-item" style="background-color: #FFFFFFf">
              <img
                class="img-fluid"
                id="img-1"
                src="../assets/Rectangle_blue.svg"
              />
              <img
                class="img-fluid"
                id="img-2"
                src="../assets/logout.svg"
                style="background-color: #59cfd7"
              />
              <a href="#" class="text-dark" style="text-decoration: none"
                >LogOut</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- COLUMN 2 -->
    <div class="col-md-3 d-flex justify-content-start">
      <div class="upload">
        <h5>Masukkan Photo Produk</h5>
        <br>
        <img :src="previewImg" class="img-fluid" />
        <input type="file" @change="uploadPhoto" />
      </div>
    </div>

    <!-- COLUMN 3 -->
    <div class="col-md-4 mx-5">
      <!-- NAMA PRODUK -->
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nama Produk</label
        >
        <input type="text" class="form-control" id="exampleFormControlInput1" />
      </div>
      <!-- HARGA -->
      <label for="exampleFormControlInput1" class="form-label"
        >Harga Produk</label
      >
      <div class="input-group mb-3">
        <span class="input-group-text"> RP. </span>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>

      <!-- JENIS -->
      <div class="collapse navbar-collapse" id="main_nav">

      </div> 
      
      <!-- DESKRIPSI PRODUK -->
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Deskripsi Produk</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMenu",
  data: function () {
    return {
      previewImg: "",
    };
  },
  methods: {
    uploadPhoto: function (event) {
      this.previewImg = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>

<style scoped>

#img-1 {
  position: relative;
}

#img-2 {
  position: relative;
  z-index: 1;
  /* left: -25px; */
  right: 25px;
}

#img-3 {
  position: relative;
  z-index: 1;
  /* left: -25px; */
  right: 28px;
}

.text {
  display: inline-block;
  margin-left: 10px;
}

#icon {
  padding-left: 25px;
  padding-right: 25px;
  background: url("https://static.thenounproject.com/png/101791-200.png")
    no-repeat left;
  background-size: 20px;
}

h5 {
  font-weight: lighter;
}

#exampleFormControlTextarea1, #exampleFormControlInput1{
  background-color: #E4F3F4;
}
</style>