<template>
    <div id="member_contents"> 
        <theChangePwdContent :changePwdUserNo="userNo"/>
    </div>
</template>

<script>
import theChangePwdContent from '~/components/member/changePwdContent';

export default {
    head() {
    return {
        bodyAttrs: {
            class:'member_bg' , //how to get classes already setted in default.vue like my has-navbar-fixed-top class
            }   
        }
    },

    asyncData({params}) { 
        console.log(params);
        return { 
            userNo: params.userNo 
        }; 
    },  
    
    layout: 'blank',
    components: {
        theChangePwdContent
    }
};
</script>