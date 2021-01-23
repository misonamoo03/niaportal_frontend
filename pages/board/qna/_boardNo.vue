<template>
  <div id="member_contents"> 
    <theQnaList :boardNo="boardNo"/>
  </div>
			
</template>
<script>
import theQnaList from '~/components/board/qnaList';


export default {
  

  asyncData({params}) { 
    console.log( params ); 
    return { 
      boardNo: params.boardNo 
    }; 
  },  

  layout: 'blank',
	components: {
    theQnaList
	},
};
</script>
