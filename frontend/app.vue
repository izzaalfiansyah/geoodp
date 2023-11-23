<template>
  <div class="h-screen p-10 bg-login flex items-center justify-center">
    <div class="bg-white rounded-lg p-10 max-w-400px shadow w-full">
      <div class="text-xl font-semibold mb-1">Selamat Datang</div>
      <div class="text-sm">Login terlebih dahulu sebelum memulai sesi!</div>
      <div class="mt-10">
        <input type="text"
          class="w-full px-3 h-10 rounded border border-solid border-gray-200 focus:(border-blue-400 ring-2 ring-indigo-100 outline-none) mb-3"
          placeholder="Username">
        <input type="text"
          class="w-full px-3 h-10 rounded border border-solid border-gray-200 focus:(border-blue-400 ring-2 ring-indigo-100 outline-none) mb-3"
          placeholder="Password">
      </div>
      <div class="mt-8">
        <button class="w-full rounded h-10 bg-primary text-white border-none">Login</button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat';
}
</style>

<style scoped>
.bg-login {
  background: url('https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
}
</style>