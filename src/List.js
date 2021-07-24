import React from 'react';

let pageConfig = {
    showData: 4,
    currentPage: 1,
    buttonShow: 7
}

let users = []
// let listUser = []
let listAlbumUser = [
  {nama :"Nixon" , title : "quidem molestiae enim"},
  {nama :"Nixon" , title : "sunt qui excepturi placeat culpa"},
  {nama :"Nixon" , title : "omnis laborum odio"},
  {nama :"Nixon" , title : "non esse culpa molestiae omnis sed optio"},
  {nama :"Nixon" , title : "eaque aut omnis a"},
  {nama :"Nixon" , title : "natus impedit quibusdam illo est"},
  {nama :"Nixon" , title : "quibusdam autem aliquid et et quia"},
  {nama :"Nixon" , title : "qui fuga est a eum"},
  {nama :"Nixon" , title : "saepe unde necessitatibus rem"},
  {nama :"Nixon" , title : "distinctio laborum qui"},
  {nama :"Gerald" , title : "quam nostrum impedit mollitia quod et dolor"},
  {nama :"Gerald" , title : "consequatur autem doloribus natus consectetur"},
  {nama :"Gerald" , title : "ab rerum non rerum consequatur ut ea unde"},
  {nama :"Gerald" , title : "ducimus molestias eos animi atque nihil"},
  {nama :"Gerald" , title : "ut pariatur rerum ipsum natus repellendus praesentium"},
  {nama :"Gerald" , title : "voluptatem aut maxime inventore autem magnam atque repellat"},
  {nama :"Gerald" , title : "aut minima voluptatem ut velit"},
  {nama :"Gerald" , title : "nesciunt quia et doloremque"},
  {nama :"Gerald" , title : "velit pariatur quaerat similique libero omnis quia"},
  {nama :"Gerald" , title : "voluptas rerum iure ut enim"},
  {nama :"Bernat" , title : "repudiandae voluptatem optio est consequatur rem in temporibus et"},
  {nama :"Bernat" , title : "et rem non provident vel ut"},
  {nama :"Bernat" , title : "incidunt quisquam hic adipisci sequi"},
  {nama :"Bernat" , title : "dolores ut et facere placeat"},
  {nama :"Bernat" , title : "vero maxime id possimus sunt neque et consequatur"},
  {nama :"Bernat" , title : "quibusdam saepe ipsa vel harum"},
  {nama :"Bernat" , title : "id non nostrum expedita"},
  {nama :"Bernat" , title : "omnis neque exercitationem sed dolor atque maxime aut cum"},
  {nama :"Bernat" , title : "inventore ut quasi magnam itaque est fugit"},
  {nama :"Bernat" , title : "tempora assumenda et similique odit distinctio error"}, 
  {nama :"Jesica" , title : "adipisci laborum fuga laboriosam"},
  {nama :"Jesica" , title : "reiciendis dolores a ut qui debitis non quo labore"},
  {nama :"Jesica" , title : "iste eos nostrum"},
  {nama :"Jesica" , title : "cumque voluptatibus rerum architecto blanditiis"},
  {nama :"Jesica" , title : "et impedit nisi quae magni necessitatibus sed aut pariatur"},
  {nama :"Jesica" , title : "nihil cupiditate voluptate neque"},
  {nama :"Jesica" , title : "est placeat dicta ut nisi rerum iste"},
  {nama :"Jesica" , title : "unde a sequi id"},
  {nama :"Jesica" , title : "ratione porro illum labore eum aperiam sed"},
  {nama :"Jesica" , title : "voluptas neque et sint aut quo odit"},
  {nama :"Astroboy" , title : "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur"},
  {nama :"Astroboy" , title : "tenetur explicabo ea"},
  {nama :"Astroboy" , title : "aperiam doloremque nihil"},
  {nama :"Astroboy" , title : "sapiente cum numquam officia consequatur vel natus quos suscipit"},
  {nama :"Astroboy" , title : "tenetur quos ea unde est enim corrupti qui"},
  {nama :"Astroboy" , title : "molestiae voluptate non"},
  {nama :"Astroboy" , title : "temporibus molestiae aut"},
  {nama :"Astroboy" , title : "modi consequatur culpa aut quam soluta alias perspiciatis laudantium"},
  {nama :"Astroboy" , title : "ut aut vero repudiandae voluptas ullam voluptas at consequatur"},
  {nama :"Astroboy" , title : "sed qui sed quas sit ducimus dolor"},
  {nama :"Nathan" , title : "odit laboriosam sint quia cupiditate animi quis"},
  {nama :"Nathan" , title : "necessitatibus quas et sunt at voluptatem"},
  {nama :"Nathan" , title : "est vel sequi voluptatem nemo quam molestiae modi enim"},
  {nama :"Nathan" , title : "aut non illo amet perferendis"},
  {nama :"Nathan" , title : "qui culpa itaque omnis in nesciunt architecto error"},
  {nama :"Nathan" , title : "omnis qui maiores tempora officiis omnis rerum sed repellat"},
  {nama :"Nathan" , title : "libero excepturi voluptatem est architecto quae voluptatum officia tempora"},
  {nama :"Nathan" , title : "nulla illo consequatur aspernatur veritatis aut error delectus et"},
  {nama :"Nathan" , title : "eligendi similique provident nihil"},
  {nama :"Nathan" , title : "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium"},
  {nama :"Bruce" , title : "delectus iusto et"},
  {nama :"Bruce" , title : "eos ea non recusandae iste ut quasi"},
  {nama :"Bruce" , title : "velit est quam"},
  {nama :"Bruce" , title : "autem voluptatem amet iure quae"},
  {nama :"Bruce" , title : "voluptates delectus iure iste qui"},
  {nama :"Bruce" , title : "velit sed quia dolor dolores delectus"},
  {nama :"Bruce" , title : "ad voluptas nostrum et nihil"},
  {nama :"Bruce" , title : "qui quasi nihil aut voluptatum sit dolore minima"},
  {nama :"Bruce" , title : "qui aut est"},
  {nama :"Bruce" , title : "et deleniti unde"},
  {nama :"William" , title : "et vel corporis"},
  {nama :"William" , title : "unde exercitationem ut"},
  {nama :"William" , title : "quos omnis officia"},
  {nama :"William" , title : "quia est eius vitae dolor"},
  {nama :"William" , title : "aut quia expedita non"},
  {nama :"William" , title : "dolorem magnam facere itaque ut reprehenderit tenetur corrupti"},
  {nama :"William" , title : "cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia"},
  {nama :"William" , title : "est minima eius possimus ea ratione velit et"},
  {nama :"William" , title : "ipsa quae voluptas natus ut suscipit soluta quia quidem"},
  {nama :"William" , title : "id nihil reprehenderit"},
  {nama :"Smith" , title : "quibusdam sapiente et"},
  {nama :"Smith" , title : "recusandae consequatur vel amet unde"},
  {nama :"Smith" , title : "aperiam odio fugiat"},
  {nama :"Smith" , title : "est et at eos expedita"},
  {nama :"Smith" , title : "qui voluptatem consequatur aut ab quis temporibus praesentium"},
  {nama :"Smith" , title : "eligendi mollitia alias aspernatur vel ut iusto"},
  {nama :"Smith" , title : "aut aut architecto"},
  {nama :"Smith" , title : "quas perspiciatis optio"},
  {nama :"Smith" , title : "sit optio id voluptatem est eum et"},
  {nama :"Smith" , title : "est vel dignissimos"},
  {nama :"Zack" , title : "repellendus praesentium debitis officiis"},
  {nama :"Zack" , title : "incidunt et et eligendi assumenda soluta quia recusandae"},
  {nama :"Zack" , title : "nisi qui dolores perspiciatis"},
  {nama :"Zack" , title : "quisquam a dolores et earum vitae"},
  {nama :"Zack" , title : "consectetur vel rerum qui aperiam modi eos aspernatur ipsa"},
  {nama :"Zack" , title : "unde et ut molestiae est molestias voluptatem sint"},
  {nama :"Zack" , title : "est quod aut"},
  {nama :"Zack" , title : "omnis quia possimus nesciunt deleniti assumenda sed autem"},
  {nama :"Zack" , title : "consectetur ut id impedit dolores sit ad ex aut"},
  {nama :"Zack" , title : "enim repellat iste"}]

let filteredUsers = []
let updateStatus = false

// const getUsers = () => {
//     // promise
//     fetch("https://jsonplaceholder.typicode.com/albums")
//         .then(response => response.json())
//         .then(json => {
//             users = json.map(album => {
//                 return {
//                     n e: albu title,
//                     address: album.id
//                 }
//             })
		
//         })
//         .then(generateTable)
//         .then(mapEventAddNew)
//         // .then(resetSearch)
// }

const generateTable = (data = listAlbumUser) => {
    console.time("generate")
    let tbody = document.querySelector("table > tbody")
    let rows = ""
	console.log("data :",data)
	console.log("tbody :",tbody)
    let startIndex = (pageConfig.currentPage - 1) * pageConfig.showData
    let endIndex = startIndex + pageConfig.showData
    // halaman 1 = 0 => 0 * 2 = 0
    // halaman 2 = 2  => 1 * 2 = 2
    // halaman 3 = 4  => 2 * 2 = 4

    for (let index = startIndex; index < endIndex && index < data.length; index++) {
        const user = data[index];

        rows += `
            <tr>
                <td align="center">${index + 1}</td>
                <td>${user.nama}</td>
                <td>${user.title}</td>
                <td>
                    <a className="btn btn-default far fa-edit" onClick=${onEdit}></a>
                    <a className="btn btn-danger fa fa-trash" ></em></a>
                </td>
            </tr>
        `
        return rows;
    }
    tbody.innerHTML = rows
	console.log(rows)
    console.timeEnd("generate")
    generatePaginationV2(data)
}

const generatePaginationV2 = data => {
    const pagination = document.querySelector("div.pagination")

    const totalPage = Math.ceil(users.length / pageConfig.showData)
    let buttonPage = ""

    const spacer = Math.floor(pageConfig.buttonShow / 2)

    let startButton = pageConfig.currentPage - spacer
    let endButton = pageConfig.currentPage + spacer

    if (startButton < 1) {
        startButton = 1
        endButton = pageConfig.buttonShow
    } else if (pageConfig.currentPage + spacer >= totalPage) {
        startButton = totalPage - pageConfig.buttonShow + 1
        endButton = totalPage
    }


    if (pageConfig.currentPage !== 1)
        buttonPage += `<span class="page first">First</span>`

    for (let index = startButton; index <= endButton; index++) {

        let selectedPage = ""
        if (pageConfig.currentPage === index)
            selectedPage = "active"

        buttonPage += `<span class="page ${selectedPage}">${index}</span>`
    }

    if (pageConfig.currentPage !== totalPage)
        buttonPage += `<span class="page last">Last</span>`


    pagination.innerHTML = buttonPage
    mapEvent()
}


const goToPage = e => {
    const search = document.querySelector('input[name="search"]')

    if (e.classList.contains("prev"))
        pageConfig.currentPage--
    else if (e.classList.contains("next"))
        pageConfig.currentPage++
    else if (e.classList.contains("first"))
        pageConfig.currentPage = 1
    else if (e.classList.contains("last"))
        pageConfig.currentPage = Math.ceil(users.length / pageConfig.showData)
    else
        pageConfig.currentPage = parseInt(e.innerText)

    if (search.value !== "")
        generateTable(filteredUsers)
    else
        generateTable()
}

const mapEvent = () => {
    document.querySelectorAll("span.page").forEach(el => {
        el.addEventListener("click", () => goToPage(el))
    })
}

const mapEventAddNew = () => {
    document.querySelector("table").addEventListener('keyup', e => {
        if (e.key === "Enter") saveData()
    })
}

const filterRow = e => {
    filteredUsers = users.filter(user => {
        return user.name.toLocaleLowerCase().includes(e.value.toLocaleLowerCase())
    })
    generateTable(filteredUsers)
}

const addRow = () => {
    const tbody = document.querySelector("table > tbody")
    const input = document.querySelector("input")

    if (updateStatus) return alert("isi dulu input nya!!")

    const newRow = `
            <tr>
            <td align="center">${users.length + 1}</td>
            <td>
                <input type="text" name="name" />
            </td>
            <td>
                <input type="text" name="title" />
            </td>
			<td>
				<button className="btn btn-default far fa-edit" onClick="">Save</button>
			</td>
            </tr>
        `
    tbody.innerHTML = newRow + tbody.innerHTML
    updateStatus = true
	mapEventAddNew()
}

const saveData = () => {
    const name = document.querySelector("input[name='name']")
    const title = document.querySelector("select[name='title']")

    if (name.value === "" && title.value === "") {
        document.querySelector("button").focus()
        return alert("Isi formnya terlebih dahulu!!")
    }

    users.push({
        name: name.value,
        title: title.value
    })

    updateStatus = false
    generateTable()
}

// const resetSearch = () => {
//     document.querySelector('input[name="search"]').value = ""
// }

const onEdit = el => {
    console.log("el", el);
    console.info("tr:", el.closest('tr').children[1].innerText)
    let name = el.closest('tr').children[1]
    let title = el.closest('tr').children[2]

    name.innerHTML = `<input value="${name.innerText}" />`
    title.innerHTML = `<input value="${title.innerText}" />`
}

const __init = () => {
    // getUsers()
    generateTable()
}
__init()

const List = () => {
    return (
        <>
        <div className="container" style={{marginTop: "25px", marginBottom: "25px"}}>
			<button className="w3-button w3-blue" onClick={addRow}>Add New</button>
			<button className="w3-button w3-green" onClick={generateTable}>Table</button>
			{/* <input type="text" name="search" onKeyUp={filterRow(this)} /> */}
			<table width="500px" border="1" cellPadding="5px">
			<thead>
				<tr>
				<th width="30px">No</th>
				<th>Name</th>
				<th>Album Name</th>
				<th>Action</th>
				</tr>
			</thead>
			<tbody id="tbodyhere">

			</tbody>
			</table>
			<div className="pagination"></div>
        </div>
        </>
        );
    }
 
export default List;