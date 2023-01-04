<template>
  <div class="w-full my-4 ">
    <div class="flex items-top justify-between text-slate-500 text-sm text-justify " >
      {{description}}
    </div>   
  </div>
</template>

<script>
  export default{
    props:{
      description: String
    }
  }
</script>