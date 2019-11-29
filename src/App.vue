<template>
    <div>
        <product-list-one></product-list-one>
        <product-list-two></product-list-two>
    </div>
</template>

<script>
import productListOne from './components/productListOne';
import productListTwo from './components/productListTwo';
export default {
    components: {
        'product-list-one': productListOne,
        'product-list-two': productListTwo,
    },
    data() {
        return { 
            
        }
    },
    methods: {
        
    },
};
</script>

<style>
body {
    margin: 0%;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
