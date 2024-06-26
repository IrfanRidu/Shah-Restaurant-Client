
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-12">
            <SectionTitle
                heading='From Our Menu'
                subHeading='Popular Items'
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }

            </div>
        </section>
    );
};

export default PopularMenu;




// const loadData = async () => {
//     fetch('menu.json')
//         .then(res => res.json())
//         .then(data => {

//             const popularItems = data.filter(item => item.category === 'popular');

//             setMenu(popularItems)
//         })

// }

// const[menu,setMenu]=useState();
// useEffect(() => {
//         loadData()
//     , []
//     })