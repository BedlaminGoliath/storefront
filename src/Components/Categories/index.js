import Products from "../Products";
import { useSelector } from "react-redux";
import { filteredProducts } from "../../store/products";
import Grid from "@mui/material/Unstable_Grid2"

const Categories=()=> {
  const products = useSelector(filteredProducts);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(displayProducts());
  },[]);

  return(
    <>
    <Grid container spacing="row" justifycontent="space-around" alignItems="Center">
          {products.map((category)=> (
    <Grid key={category.name}xs={4}>
          <Products product={category}/>
    </Grid>
      ))}
    </Grid>
      </>
  );
}


export default Categories;