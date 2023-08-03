import { i18nStore } from '@/models/modules/i18n/store';
import { createStyles } from "@mantine/core";
import { Images } from "../../public/index";
import { COLORS } from "@/themes/Mantine/colors";
import { useStores } from "@/models";
export default createStyles((theme) => ({
  boxWrapper: {
    marginLeft: "70px",
    marginRight: "70px",
    [`@media (max-width: 1080px)`]: {
      marginLeft: "20px",
      marginRight: "20px"
    }
  },
  boxWrapper2:{
    marginLeft:'20px',
    marginRight: '20px',
    display:'visible',
    [`@media (max-width: 500px)`]: {
      display:'flex',
      // marginTop:"10px"
    }

  },
  boxWrapper3:{
    flexDirection:'row',
    [`@media (max-width: 400px)`]: {
      flexDirection:'column',
    }

  },
  productImageStyle: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    [`@media (max-width: 1080px)`]: {
      width: "95vw"
    }
  },
  flexWrapper1: {
    gap: "22px",
    justifyContent: "none",
    [`@media (max-width: 1080px)`]: {
      gap: "30px",
      justifyContent: "center"
    }
  },
  flexWrapper2: {
    gap: "50px",
    marginTop: "40px",
    flexWrap: "nowrap",
    [`@media (max-width: 1080px)`]: {
      flexWrap: "wrap"
    }
  },
  flexWrapper3: {
    backgroundColor: "white",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    [`@media (max-width: 500px)`]: {
      flexWrap: "wrap",
      justifyContent: "none"
    }
  },
  flexWrapper4:{
    alignItems:'center',
    justifyContent:"space-between",
    margin:'32px',
    [`@media (max-width: 500px)`]: {
      margin: "0px",
      marginTop: "20px",
    }
  },
  flexWrapper5:{
    alignItems:"end",
    gap: "50px",
    marginLeft:"50px",
    [`@media (max-width: 420px)`]: {
      marginLeft: "5px",
      gap:"10px"
    }
  },
  flexWrapper6:{
    alignItems:"center",
    justifyContent:"space-between",
    [`@media (max-width: 500px)`]: {
      alignItems:'start'
    }

  },
  flexWrapper7:{
    alignItems:"center",
    gap:"24px",
    justifyContent:"space-between",
    [`@media (max-width: 500px)`]: {
      width:"100%",
      marginTop:"12px",
      marginBottom:"10px",
      justifyContent:"space-evenly"
    }

  },
  textStyle: {
    marginTop:'10px',
    marginBottom:'10px',
    marginRight:"0px",
    [`@media (max-width: 500px)`]: {
      marginRight:"13px"
    }
  },
  visitStoreBtnStyle:{
    marginLeft:"0px",
    borderRadius:"44px",
    [`@media (max-width: 500px)  or (max-width: 400px) `]: {
      marginLeft:"90px",
    }
    
  },
  mark: {
    backgroundColor: COLORS.gray[6],
  },
  boxStyles:{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "34px",
    backgroundColor: "white",
    color: "black",
    width: "84px",
    borderRadius: "26px",
  },
  popoverStyle: {
    display: "flex",
    paddingLeft:"24px",
    paddingRight:"24px",
    alignItems: "center",
    borderRadius: "18px",
    gap: "12px",
    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.15)",
    height: "56px"
  }
  
}));
