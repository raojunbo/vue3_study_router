<template>
    <div>
        <ul>
            <li v-for="item in messages" :key="item.id">
                {{ item.msg }}
            </li>
           
        </ul>
    </div>
</template>

<script>
export default {
    name:"messsage",
    data(){
        return {
            messages:[
                {id: 1,msg:"消息1"},
                {id: 2,msg:"消息2"},
                {id: 3,msg:"消息3"},
                {id: 4,msg:"消息4"},
                {id: 5,msg:"消息5"},
            ]
        }
    }
}
</script>

<style>

</style>