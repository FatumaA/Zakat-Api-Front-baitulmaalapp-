// import * as Yup from 'yup'
import { Button, FormControl, FormControlLabel, Grid, Radio } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel, RadioGroup, TextField } from 'formik-material-ui';
import DisplayResults from './displayResults';





const ZakatForm = () =>  {

  const initialValues = {
    Gold: false,
    Silver: false,
    Cash: false,
    Livestock: false,
    AgriculturalProduce: false,
    GrainsDriedFruits: false,
    SeaWealth: false,
    MerchandiseOrGoods: false,
    BusinessOrTrade: false,
    BurriedTreasure: false,
     
   
    estimateValueGold:'',
    estimateValueSilver:'',
    estimateValueCash:'',
    estimateValueLiveStock: '',
    irrigationType: '',
    sheepAmount: '',
    cowsAmount: '',
    camelAmount: '',
    estimateValueSeaWealth: '',
    estimateValueGrainsDriedFruits:'',
    estimateValueAgriculturalProduce: '',
    estimateValueMerchantGoods:'',
    estimateValueBusTrade:'',
    estimateValueSeaTreasure:'',

  }
  const storedValues = [];
  const handleSubmit = (values:any, actions:any) => {
         console.log(values)
        storedValues.push(values)
         actions.resetForm()
         actions.setSubmitting(false);
        
  };
  console.log(storedValues)
  
  return (
    <div className="App">
      <h1> Calculate Your Zakat </h1>
    
      <Formik initialValues={initialValues} onSubmit={handleSubmit} >
             {(props) => (
               <>
                    <Form>
                    <h3> Choose Your Wealth Category </h3>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Field name="Gold" type='checkbox' 
                                  component={CheckboxWithLabel} Label={{ label: "Gold"}}/>
                        </Grid>
                           <Grid item xs={4}>
                            <Field name="Silver" type='checkbox' 
                                  component={CheckboxWithLabel} Label={{ label: "Silver"}}/>
                                    </Grid>
                            <Grid item xs={4}>
                    <Field name="Cash" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Cash"}}/>
                           </Grid>
                           <Grid item xs={4}>
                    <Field name="Livestock" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Livestock"}}/>
                            </Grid>
                           <Grid item xs={4}>
                    <Field name="AgriculturalProduce" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Agricultural Produce"}}/>
                            </Grid>
                            <Grid item xs={4}>
                    <Field name="GrainsDriedFruits" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Grains & Dried Fruits"}}/>
                            </Grid>
                            <Grid item xs={4}>
                    <Field name="SeaWealth" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Sea Wealth"}}/>
                            </Grid>
                            <Grid item xs={4}>
                    <Field name="MerchandiseOrGoods" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Merchandise Goods"}}/>
                            </Grid>
                            <Grid item xs={4}>
                    <Field name="BusinessOrTrade" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Business Or Trade"}}/>
                            </Grid>
                            <Grid item xs={4}>
                    <Field name="BurriedTreasure" type='checkbox' 
                           component={CheckboxWithLabel} Label={{ label: "Burried Treasure"}}/>
                           </Grid>
                    </Grid>
                
                {props.values.Gold && 
                <>
                <h4> Have you had the gold for a full lunar year? </h4>
                    <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrGold' >
                          <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                </>
                }
                { (props.values.Gold && props.values.fullyrGold=== 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueGold" type='number' component={TextField} 
                                variant='outlined' label='Input Amount in Grams' required/> 
                      </> 

                    }  


                {props.values.Silver &&
                <>
                <h4> Have you had the silver for a full lunar year? </h4>
                    <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrSilver' >
                          <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                </>
                }
                   { (props.values.Silver && props.values.fullyrSilver === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueSilver" type='number' component={TextField} 
                                variant='outlined' label='Input Amount in Grams' required/> 
                      </> 

                    } 

                {props.values.Cash &&
                <>
                <h4> Have you had the cash for a full lunar year? </h4>
                    <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrCash' >
                          <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                </>
                }
                   { (props.values.Cash && props.values.fullyrCash === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueCash" type='number' component={TextField} 
                                variant='outlined' label='Input Amount in Grams' required/> 
                      </> 

                    }  
                
               
               
              

                {props.values.Livestock && 
                <>
                <h4> Are the livestock for Trade? </h4>
                    <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='livestockfortrade' >
                          <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                </>
                }
                {(props.values.Livestock && props.values.livestockfortrade === 'yes') &&
                      <>
                      <h4> Total Estimated Value </h4>
                        <Field name="estimateValueLiveStock" type='number' component={TextField} 
                                variant='outlined' label='Total Estimated Value' required />         
                      </>  
                 }
                 
                     
                 { (props.values.Livestock && props.values.livestockfortrade === 'no') &&
                      <>
                      <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <h5> Enter Number of Sheep </h5>
                        <Field name="sheepAmount" type='number' variant="outlined" 
                                component={TextField} label="No. of sheep" required/> 
                                {/* {props.values.sheepAmount} */}
                                </Grid>
                                <Grid item xs={4}>     
                        <h5> Enter Number of Cows </h5>
                        <Field name="cowsAmount" type='number'  variant="outlined" 
                                component={TextField} label="No. of cows"required /> 
                                </Grid>
                                <Grid item xs={4}>
                        <h5> Enter Number of Camels </h5>
                        <Field name="camelAmount" type='number'  variant="outlined" 
                                component={TextField} label="No. of camel" required/> 
                                </Grid>
                        </Grid>
                      </> 

                    }  
                 
                 {props.values.AgriculturalProduce && 
                <>
                <h4> How have you produced/farmed your Agricultural Produce ? </h4>
                    <FormControl component="fieldset">
                      <Field type="radio" component={RadioGroup}  name='irrigationType'>
                          <div className="flex">
                        <FormControlLabel control={<Radio required/>} value='naturalIrrigation' label='Fully Naturally Irrigated'/>
                        <FormControlLabel control={<Radio required/>} value='artificialIrrigation' label='Fully Artificially Irrigated'/>
                        <FormControlLabel control={<Radio required/>} value='mixedIrrigation' label='Mixed Irrigation'/>
                        </div>
                      </Field>  
                    </FormControl>
                    <h4> Total Estimated Value </h4>
                        <Field name="estimateValueAgriculturalProduce" type='number' component={TextField} 
                                variant='outlined' label='Total Estimated Kgs' required/> 
                              
                </>
                }  
                       
                 {props.values.SeaWealth && 
                 <>  
                <h4> Is the sea treasure for Trade? </h4>
                <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='seatrade' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                    </>
                }

                {(props.values.SeaWealth && props.values.seatrade === 'yes') &&
                      <>
                      <h4> Have you had it for one full lunar year? </h4>
                      <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrSeaTreasure' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                      </>  
                      }
                    { (props.values.SeaWealth && props.values.seatrade === 'yes' && props.values.fullyrSeaTreasure  === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueSeaWealth" type='number' component={TextField} 
                                variant='outlined' label='Total Estimated Value' required/> 
                      </> 

                    }  
               
              
               {props.values.GrainsDriedFruits && 
                 <> 
                <h4> Have the Grains and Dried Fruits been with you for a full lunar year? </h4>
                <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrGrainsDriedFruits' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                    </>
                }
                { (props.values.GrainsDriedFruits  &&  props.values.fullyrGrainsDriedFruits  === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueGrainsDriedFruits" type='number' component={TextField} 
                                variant='outlined' label='Amount in kgs' required /> 
                      </> 

                    }  

      
            {props.values.MerchandiseOrGoods && 
                 <> 
                <h4> Are the merchant/physical goods for Trade? </h4>
                 <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='areGoodsForTrade' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                    </>
               }
                {(props.values.MerchandiseOrGoods && props.values.areGoodsForTrade === 'yes') &&
                    <>
                    <h4> Have you had the merchant/physical goods with you for a full lunar year? </h4>
                    <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyrMerchantGoods' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                    </> 
                    }
                    { (props.values.MerchandiseOrGoods && props.values.areGoodsForTrade === 'yes' && props.values.fullyrMerchantGoods === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueMerchantGoods" type='number' component={TextField} 
                                variant='outlined' label='Total Estimated Value' required/> 
                      </> 

                    } 


                {props.values.BusinessOrTrade && 
                 <> 
                  <h4> Has the  business principle (business and trade) been with you for a full lunar year? </h4>
                   <FormControl component="fieldset" >
                      <Field type="radio" component={RadioGroup}  name='fullyBusTrade' >
                      <div className="flex">
                        <FormControlLabel control={<Radio/>} value='yes' label='Yes'/>
                        <FormControlLabel control={<Radio/>} value='no' label='No'/>
                        </div>
                      </Field>  
                    </FormControl>
                    </>
                    }
                    { (props.values.BusinessOrTrade && props.values.fullyBusTrade === 'yes') &&
                      <>
                        <h4> Total Estimated Value </h4>
                        <Field name="estimateValueBusTrade" type='number' component={TextField} 
                                variant='outlined' label='Total Estimated Value' required/> 
                      </> 

                    } 
                  

                {props.values.BurriedTreasure &&
                  <div  className="btn" >
                  <h4> Enter estimated value of buried treasure:  </h4>
                  <Field name="estimateValueSeaTreasure" type='number' component={TextField} 
                                      variant='outlined' label='Total Estimated Value' required/>
                                     
                  </div>
                    }           
                           
                    {(props.values.Gold || props.values.Silver || props.values.Cash || props.values.Livestock 
                        || props.values.GrainsDriedFruits || props.values.AgriculturalProduce|| props.values.SeaWealth || props.values.MerchandiseOrGoods
                        || props.values.BusinessOrTrade || props.values.BurriedTreasure) &&
                        <>
                        <Button className="btn" type='submit' variant='contained' color='secondary'>
                           Calculate Zakat
                        </Button>
                        </>
                    }   
                    
                    </Form>
                     <DisplayResults values={props.values} />
                     </>
                    
             )}
             
       </Formik>
       {/* <DisplayResults values={storedValues[0]} /> */}
    </div>

  );
};


export default ZakatForm;
