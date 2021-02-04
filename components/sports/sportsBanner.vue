<template>
    <div id="sub_banner" class="clear"> 
        <div class="container">
            <h1>{{message}}</h1>
        </div> 
    </div> 
</template>

<script>
export default {
    props: ['code'],
    data() {
        return {
            message: ''
        };
    },
    beforeMount() {
        switch (this.code) {
            case 'CD020': {
            this.message = '골프 데이터';
            break;
            }
            case 'CD021': {
            this.message = '축구 데이터';
            break;
            }
            case 'CD022': {
            this.message = '농구 데이터';
            }
        }
    }
}
</script>