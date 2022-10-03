const DisplayResults = ({values}) => {
    
         const allZakatDue = []; 
         const allAnimalsDue = [];

         const nisaab = 85 //grams of gold
         const pricePergram = 6062.08;

         const nisaabCash = (85 * 6062.08); //grams of gold

         const nisaabSilver = 595 //grams of silver
         const SilverPricePergram = 87.84;

         const nisaabAgriculturalProduce = 624; //kg

        if(values.estimateValueGold >= nisaab) {
          const goldDue = (0.025 * values.estimateValueGold)
          const zakatGold = (goldDue * pricePergram)
          allZakatDue.push(zakatGold)
        }
        if(values.estimateValueSilver >= nisaabSilver) {
          const silverDue = (0.025 * values.estimateValueSilver)
          const zakatSilver = (silverDue * SilverPricePergram)
          allZakatDue.push(zakatSilver)
        }
        if(values.estimateValueCash >= nisaabCash) {
          const zakatCash = (0.025 * values.estimateValueCash)
          allZakatDue.push(zakatCash)
        }
        if(values.estimateValueLiveStock) {
          const livestockCash = (0.025 * values.estimateValueLiveStock)
          allZakatDue.push(livestockCash)
        }
        if(values.estimateValueSeaTreasure) {
          const seaWealthCash = (0.025 * values.estimateValueSeaTreasure)
          allZakatDue.push(seaWealthCash)
        }
        if(values.estimateValueSeaTreasure) {
          const seaWealthCash = (0.2 * values.estimateValueSeaTreasure)
          allZakatDue.push(seaWealthCash)
        }
        if(values.estimateValueMerchantGoods) {
          const merchantGoodsCash = (0.2 * values.estimateValueMerchantGoods)
          allZakatDue.push(merchantGoodsCash)
        }
        if(values.estimateValueBusTrade) {
          const busTradeCash = (0.025 * values.estimateValueBusTrade)
          allZakatDue.push(busTradeCash)
        }

        if(values.estimateValueGrainsDriedFruits >= nisaabAgriculturalProduce) {
          const grainsDriedFruitKgDue = (0.025 * values.values.estimateValueGrainsDriedFruits)
          allZakatDue.push(grainsDriedFruitKgDue)
        }

        let noOfSheep=0;
      
          //Sheep
          if(values.sheepAmount === 0 && values.sheepAmount <=39){
            noOfSheep = 0
            allAnimalsDue.push(`Sheep: ${noOfSheep}`)
          }
          if(values.sheepAmount >=40 && values.sheepAmount <=120){
            noOfSheep = 1
            allAnimalsDue.push(`Sheep: ${noOfSheep}`)
          }
          if (values.sheepAmount >=121 && values.sheepAmount <=200){
            noOfSheep = 2
            allAnimalsDue.push(`Sheep: ${noOfSheep}`)
           }
        if (values.sheepAmount >=201 && values.sheepAmount <=300){
            noOfSheep = 3
            allAnimalsDue.push(`Sheep: ${noOfSheep}`)
         }
       
        // Cows
        let noOfCows='';
          if (values.cowsAmount === 0 && values.cowsAmount <=29){
            noOfCows = '0'
            allAnimalsDue.push(`Cows: ${noOfCows}`)
            }
          if (values.cowsAmount >=30 && values.cowsAmount <=39){
            noOfCows = '1 year old cow/bull';
            allAnimalsDue.push(`Cows: ${noOfCows}`)
          }
         if (values.cowsAmount >=40 && values.cowsAmount <=59){
            noOfCows = '2 year old cow';
            allAnimalsDue.push(`Cows: ${noOfCows}`)
         }
          if (values.sheepAmount === 60){
            noOfCows = 'Two 1 year old cow';
            allAnimalsDue.push(`Cows: ${noOfCows}`)
          }
    
        // Camels
        let noOfCamels='';
          if (values.camelAmount === 0 && values.camelAmount <=4){
            noOfCamels = '0'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=5 && values.camelAmount <=9){
            noOfCamels = '1 sheep'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=10 && values.camelAmount <=14){
            noOfCamels = '2 sheep'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=15 && values.camelAmount <=19){
            noOfCamels = '3 sheep'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=20 && values.camelAmount <=24){
            noOfCamels = '4 sheep'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=25 && values.camelAmount <=35){
            noOfCamels = '1 year old she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=36 && values.camelAmount <=45){
            noOfCamels = '2 year old she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=46 && values.camelAmount <=60){
            noOfCamels = '3 year old she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=61 && values.camelAmount <=75){
            noOfCamels = '4 year old she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
          if (values.camelAmount >=76 && values.camelAmount <=90){
            noOfCamels = 'Two young she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
         
          if (values.camelAmount >=91 && values.camelAmount <=120){
            noOfCamels = 'Two 3 year old she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
         
          if (values.camelAmount === 121){
            noOfCamels = 'Three young she-camel'
            allAnimalsDue.push(`Camels: ${noOfCamels}`)
          }
        

        let agriProduce = 0;
        switch(values.estimateValueAgriculturalProduce >= nisaabAgriculturalProduce ) {
          case (values.irrigationType === 'naturalIrrigation'):
            agriProduce = (0.1 * values.estimateValueAgriculturalProduce)
            allZakatDue.push(agriProduce)
          break;
          case (values.irrigationType === 'artificialIrrigation'):
            agriProduce = (0.05 * values.estimateValueAgriculturalProduce)
            allZakatDue.push(agriProduce)
          break;
          case (values.irrigationType === 'mixedIrrigation'):
            agriProduce = (0.075 * values.estimateValueAgriculturalProduce)
            allZakatDue.push(agriProduce)
          break;
          
        }

    return (
        <div>
            <h1>Zakat Due</h1>
            <h4>Monetary Zakat Due:</h4> {allZakatDue.length >=1 && allZakatDue.reduce((a,b) => a+b )}

            <h4>LiveStock Zakat Due:</h4> {allAnimalsDue.length>=1 && allAnimalsDue.map(((animalx ,i) => { return(<h4> {animalx} </h4>) } ) )}
        </div>
    )
}

export default DisplayResults
