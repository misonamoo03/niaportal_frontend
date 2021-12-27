<template>
    <div id="member_contents"> 
        <theVerificationCode :verifyUserNo="userNo" />
    </div>
</template>

<script>
import theVerificationCode from '~/components/member/verificationCode';

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
    
    layout: 'member',
    components: {
        theVerificationCode
    },
};
</script>