const apiAuthToken = `d92a5fd1a73ac7d4f8cf54596b544812`

const btnGen = document.getElementById('btn-generate')
const cityId = document.getElementById('input-cidade')

const handleBtnGen = () => {

    fetch(`http://apiadvisor.climatempo.com.br/api/v1/locale/city/${cityId.value}?token=${apiAuthToken}`)

        .then((response) => response.json())

        .then((data) => {
            console.log(data);
            preResult.innerHTML = JSON.stringify(data);
            h3Nome.innerHTML = data.name;
            pInfo.innerHTML = "Cidade: " + data.name + ", " + data.state + ", " + data.country;

        })
}

btnGen.onclick = handleBtnGen
