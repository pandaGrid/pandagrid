$(function(){
	
	$('#form').validate({

		errorElement:'small',

		showErrors:function(errorMap,messageList){
			this.defaultShowErrors();  //开启默认验证
		},


		rules:{
			name:{
		 		required:true, 
		 		cn:true,
		 	},
		 	sex:{
		 		required:true,
		 	},
		 	idnumber:{
		 		required:true,
		 		idcard:true,
		 	},
		 	telephone:{
		 		required:true,
		 		phone:true,
		 	},
		 	email:{
		 		required:true,
		 		email:true,
		 	},
		 	height:{
		 		range:[120,220],
		 	},
		 	
		 	score:{
		 		required:true,
		 	},
		 	homeaddress:{
		 		required:true,
		 		minlength:15,
		 	},
		 	schooladdress:{
		 		minlength:15,
		 	},
		 	Firstkeeper:{
		 		minlength:2,
		 		cn:true,
		 	},
		 	firstkeeperphone:{
		 		phone:true,
		 	},
		 	secondkeeper:{
		 		minlength:2,
		 		cn:true,
		 	},
		 	secondkeeperphone:{
		 		phone:true,
		 	},
		 	content:{
		 		minlength:10,
		 	}

		},

		messages:{
 	    	name:{
		 		required:'请填写你的姓名', 
		 		cn:'朋友，你是外国朋友吗？否有中文名字呢？',
		 	},
	 		sex:{
		 		required:'请选择你的性别',
		 	},
	 		idnumber:{
				required:'请填写身份证号码',
				idcard:'请填写正确的身份证号码'
		 	},
		 	
		 	telephone:{
		 		required:'请填写手机号码',
		 		phone:'请填写正确的手机号码',
		 	},
		 	email:{
		 		required:'请填写你的常用邮箱',
		 		email:'你填写的邮箱格式不正确',
		 	},
		 	height:{
		 		required:'请填写你的身高单位cm',
		 		range:'朋友，这是你的身高吗？',
		 	},
		 	score:{
		 		required:'请选择你的文化课成绩',
		 	},
		 	homeaddress:{
		 		required:'请填写你的家庭地址',
		 		minlength:'朋友，这是你家庭详细地址吗？',
		 	},
		 	schooladdress:{
		 		minlength:'朋友，这是你学校准确通讯地址吗？',
		 	},
		 	Firstkeeper:{
		 		cn:'朋友，你的监护人是外国朋友吗？他是否有中文名字呢？',
		 		minlength:'朋友，这是你第一监护人的姓名吗？',

		 	},
		 	firstkeeperphone:{
		 		phone:'请填写正确的手机号码',
		 	},
		 	secondkeeper:{
		 		cn:'朋友，你的监护人是外国朋友吗？他是否有中文名字呢？',
		 		minlength:'朋友，这是你第二监护人的姓名吗？',
		 	},
		 	secondkeeperphone:{
		 		phone:'请填写正确的手机号码',
		 	},
		 	content:{
		 		minlength:'朋友，请用至少10个字简单的描述一下',
		 		
		 	}


		},
	})

})