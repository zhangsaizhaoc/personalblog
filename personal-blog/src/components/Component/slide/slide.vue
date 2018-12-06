<template>
    <div class="branner">
        <el-carousel height="height">
            <el-carousel-item v-for='(item,index) in data' :key='index'>
                <img :src="item.img" alt="" width='100%' height='100%'>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    export default {
        name: '',
        data(){
            return {

            }
        },
        props:{
            data:{
                type:Array
            },
            height:{
                type:Number
            }
        },
        components:{

        },
        mounted() {
            
        },
        methods:{

        }
    
    }
</script>
<style lang="" scoped>
    @import 'swiper/dist/css/swiper.min.css';
</style>