<template>
    <div>
        <div class="container mx-auto">
            <h1 class="text-lg font-bold">Produtos</h1>
            <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
            <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet quis delectus perferendis incidunt, corporis ratione quae. Dicta dolorum mollitia quis quae incidunt repudiandae neque adipisci, repellat, quisquam odit architecto?</p>
        </div>   
        <br>
        <br>

        <!-- <div v-for="product in products" :key="product.id">
          {{ product.title }}
        </div> -->
        
    </div>
</template>

<script>
export default {

 
  async mounted(){
    try{
      const data = await $axios.$get("https://jsonplaceholder.typicode.com/posts")
      console.log(data)
    } catch(error){
      console.error(error)
    }
}

  
}
</script>