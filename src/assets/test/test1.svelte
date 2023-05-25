<script lang="ts">
  // import { gapiReadyPromise } from '../../lib/gapi';

  const SHEETS_API = 'https://sheetsu.com/apis/v1.0su/dab69bf78a86';

  let given_answers1 = [];
  let answers1 = [
    { value: 1, label: 'Министр обороны' },
    { value: 2, label: 'Министерство обороны Российской Федерации' },
    { value: 3, label: 'Генеральный штаб' },
    { value: 4, label: 'Сухопутные войска' },
    { value: 5, label: 'Воздушно-космические силы,' },
    { value: 6, label: 'Военно-Морской Флот' },
    { value: 7, label: 'Ракетные войска стратегического назначения' },
    { value: 8, label: 'Воздушно-десантные войска' },
    { value: 9, label: 'Тыл Вооруженных Сил' },
    { value: 10, label: 'Войска, не входящие в виды и рода войск ВС' },
    { value: 11, label: 'Специальные войска' },
    { value: 12, label: 'Расквартирование и обустройство войск' },
    { value: 13, label: 'Войса специального назначения' },
    { value: 14, label: 'Частные военные' },
  ];
  let right_answers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  let given_answers2 = [];
  let answers2 = [
    { value: 1, label: 'Мотострелковые войска' },
    { value: 2, label: 'Танковые войска' },
    { value: 3, label: 'Ракетные войска и артиллерия' },
    { value: 4, label: 'Войска ПВО Сухопутных Войск' },
    { value: 5, label: 'Разведывательные соединения и воинские части' },
    { value: 6, label: 'Инженерные войска' },
    { value: 7, label: 'Войска радиационной, химической и биологической защиты' },
    { value: 8, label: 'Войска связи' },
    { value: 9, label: 'Воздушно-десантные войска.' },
    { value: 10, label: 'Тыл Вооруженных Сил' },
    { value: 11, label: 'Войска, не входящие в виды и рода войск ВС' },
    { value: 12, label: 'Специальные войска' },
    { value: 13, label: 'Расквартирование и обустройство войск' }
  ];
  let right_answers2 = [1, 2, 3, 4, 5, 6, 7, 8];

  let given_answers3 = [];
  let answers3 = [
    { value: 1, label: 'Военно-Воздушные Силы' },
    { value: 2, label: 'Космические войска' },
    { value: 3, label: 'Войска противовоздушной и противоракетной обороны' },
    { value: 4, label: 'Войска ПВО Сухопутных Войск' },
    { value: 5, label: 'Разведывательные соединения и воинские части' },
    { value: 6, label: 'Инженерные войска' },
    { value: 7, label: 'Войска радиационной, химической и биологической защиты' },
    { value: 8, label: 'Войска связи' },
    { value: 9, label: 'Воздушно-десантные войска.' },
    { value: 10, label: 'Тыл Вооруженных Сил' },
    { value: 11, label: 'Войска, не входящие в виды и рода войск ВС' },
    { value: 12, label: 'Специальные войска' },
    { value: 13, label: 'Расквартирование и обустройство войск' }
  ];
  let right_answers3 = [1, 2, 3];

  let given_answers4 = [];
  let answers4 = [
    { value: 1, label: 'Подводные силы' },
    { value: 2, label: 'Надводные силы' },
    { value: 3, label: 'Береговые войска' },
    { value: 4, label: 'Морская авиация' },
    { value: 5, label: 'Разведывательные соединения и воинские части' },
    { value: 6, label: 'Инженерные войска' },
    { value: 7, label: 'Войска радиационной, химической и биологической защиты' },
    { value: 8, label: 'Войска связи' },
    { value: 9, label: 'Воздушно-десантные войска.' },
    { value: 10, label: 'Тыл Вооруженных Сил' },
    { value: 11, label: 'Войска, не входящие в виды и рода войск ВС' },
    { value: 12, label: 'Специальные войска' },
    { value: 13, label: 'Расквартирование и обустройство войск' }
  ];
  let right_answers4 = [1, 2, 3, 4];

  // function gradeWork(score_) {
  //   // Вычисляем среднее значение оценок за задания
  //   const average = score_ / 4;

  //   // Округляем среднее значение до целого числа
  //   const rounded = Math.round(average);

  //   // Ограничиваем оценку в диапазоне от 2 до 5
  //   const grade = Math.min(Math.max(rounded, 2), 5);

  //   return grade;
  // }
  function gradeWork(score_) {
    let grade_ = 2;
    if (score_ == 1) {
      grade_ = 2;
    } else if (score_ == 2) {
      grade_ = 3;
    } else if (score_ == 3) {
      grade_ = 4;
    } else if (score_ == 4) {
      grade_ = 5;
    }
    return grade_;
  }

  let score = 0;
  let grade = 2;
  $: grade = gradeWork(score);
  $: score = score;

  function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    const sorted1 = arr1.slice().sort();
    const sorted2 = arr2.slice().sort();

    return sorted1.every((value, index) => value === sorted2[index]);
  }

  function checkAnswers() {
    score = 0;
    // console.log('damn')
    console.log(JSON.stringify(given_answers4));

    if (arraysEqual(given_answers1, right_answers1)) {
      console.log('Yay! Your answers are correct!');
      score += 1;
    }
    if (arraysEqual(given_answers2, right_answers2)) {
      console.log('Yay! Your answers are correct!');
      score += 1;
    }
    if (arraysEqual(given_answers3, right_answers3)) {
      console.log('Yay! Your answers are correct!');
      score += 1;
    }
    if (arraysEqual(given_answers4, right_answers4)) {
      console.log('Yay! Your answers are correct!');
      score += 1;
    }
  }

  // In this example data is saved to the window.users variable
  // So it's available for use anywhere in the app/page
  function successFunc(data) {
    console.log(data);
  }

  function errorFunc(e) {
    console.log(e);
  }

  // Use Sheetsu.read to get data from a spreadsheet.
  // Pass callback function, which takes one argument - data
  // It's triggered after getting data from API
  // Sheetsu.read("https://sheetsu.com/apis/v1.0su/dab69bf78a86", {}).then(successFunc, errorFunc);
  // function sendAnswer() {
  //   var data = {
  //     "ФИО": "Назаров Владимир Владимирович",
  //     "вопрос 1": score,
  //     "вопрос 2": 0,
  //     "вопрос 3": 0,
  //     "вопрос 4": 0,
  //     "отвечено / всего": `${score} / 4`,
  //     "оценка": Math.floor(score/4*5),
  //   };
  //   Sheetsu.write(SHEETS_API, data, {}, function (result) {
  //     console.log(result);
  //   });
  // }

  // const SPREADSHEET_ID = '18KQz3OPx3SMt-R5bM-9z0Gnoo8Wemz5hgwJNvGMb66w';
  // const RANGE = 'Sheet1!A2:B2';
  // const ACCESS_TOKEN = 'ya29.a0AVvZVsrspVvftwEXjCtaGWc3yAFZRZKlHkCJwoCodUfa-Gv5aSxAkSQQgAnEgi7FMi6X7nGbXtFd9iR2uHQ23pU73fKixPBSENT2Orjm-RVxmtci93SGGIQFFO7dyFqIK6WaJ7Y_QRLKBZhyUxhZ9-SyGjTpaCgYKAYYSARASFQGbdwaIACYq65ufl04qouvzSb8XMw0163';

  // export async function post(request) {
  //   const { sheetId, range, values } = request.body;

  //   await gapiReadyPromise;

  //   const response = await gapi.client.sheets.spreadsheets.values.update({
  //     spreadsheetId: sheetId,
  //     range,
  //     valueInputOption: 'USER_ENTERED',
  //     resource: {
  //       values: [values]
  //     }
  //   });

  //   return {
  //     body: response.result
  //   };
  // }

  // appendValues();
  function appendValues() {
    return;
  }
</script>

<!-- <svelte:head>
  <script src="https://apis.google.com/js/api.js" on:load={initializeGapi}></script>
</svelte:head> -->

<h1>Занятие «Вооруженные силы РФ»</h1>
<div class="mx-auto w-fit">
  <div>
    <div class="mt-4 rounded-md border-[2px] border-white px-2 py-1 text-xl">Отметить, что входит в организационную структуру ВС РФ:</div>
    <div class="mt-2 flex flex-col space-y-1">
      {#each answers1 as { value, label }}
        {#if given_answers1.includes(value)}
          <label class="flex items-center rounded-sm bg-[#444653]">
            <input type="checkbox" bind:group={given_answers1} {value} class="appearance-none rounded-sm border-[1px] border-white bg-green-500" />
            <div class="ml-2">{label}</div>
          </label>
        {:else}
          <label class="flex items-center rounded-sm hover:bg-[#444653]">
            <input type="checkbox" bind:group={given_answers1} {value} class="appearance-none rounded-sm border-[1px] border-white bg-transparent" />
            <div class="ml-2">{label}</div>
          </label>
        {/if}
      {/each}
    </div>
    <div class="mt-12 rounded-md border-[2px] border-white px-2 py-1 text-xl">Отметить, что входит в состав Сухопутных войск:</div>
    <div class="mt-2 flex flex-col space-y-1">
      {#each answers2 as { value, label }}
        {#if given_answers2.includes(value)}
          <label class="flex items-center rounded-sm bg-[#444653]">
            <input type="checkbox" bind:group={given_answers2} {value} class="appearance-none rounded-sm border-[1px] border-white bg-green-500" />
            <div class="ml-2">{label}</div>
          </label>
        {:else}
          <label class="flex items-center rounded-sm hover:bg-[#444653]">
            <input type="checkbox" bind:group={given_answers2} {value} class="appearance-none rounded-sm border-[1px] border-white bg-transparent" />
            <div class="ml-2">{label}</div>
          </label>
        {/if}
      {/each}
    </div>
    <div class="mt-12 rounded-md border-[2px] border-white px-2 py-1 text-xl">Отметить, что входит в состав Воздушно-космических сил:</div>
    <div class="mt-2 flex flex-col space-y-1">
      {#each answers3 as { value, label }}
        {#if given_answers3.includes(value)}
          <label class="flex items-center rounded-sm bg-[#444653]">
            <input type="checkbox" bind:group={given_answers3} {value} class="appearance-none rounded-sm border-[1px] border-white bg-green-500" />
            <div class="ml-2">{label}</div>
          </label>
        {:else}
          <label class="flex items-center rounded-sm hover:bg-[#444653]">
            <input type="checkbox" bind:group={given_answers3} {value} class="appearance-none rounded-sm border-[1px] border-white bg-transparent" />
            <div class="ml-2">{label}</div>
          </label>
        {/if}
      {/each}
    </div>
    <div class="mt-12 rounded-md border-[2px] border-white px-2 py-1 text-xl">Отметить, что входит в состав ВМФ:</div>
    <div class="mt-2 flex flex-col space-y-1">
      {#each answers4 as { value, label }}
        {#if given_answers4.includes(value)}
          <label class="flex items-center rounded-sm bg-[#444653]">
            <input type="checkbox" bind:group={given_answers4} {value} class="appearance-none rounded-sm border-[1px] border-white bg-green-500" />
            <div class="ml-2">{label}</div>
          </label>
        {:else}
          <label class="flex items-center rounded-sm hover:bg-[#444653]">
            <input type="checkbox" bind:group={given_answers4} {value} class="appearance-none rounded-sm border-[1px] border-white bg-transparent" />
            <div class="ml-2">{label}</div>
          </label>
        {/if}
      {/each}
    </div>
  </div>
</div>

<button class="mt-4 rounded-xl bg-green-600 px-4 py-2 text-xl font-semibold hover:cursor-pointer hover:bg-green-700 active:bg-green-800" on:click={checkAnswers}>Ответить</button>

<div class="flex items-center space-x-4">
  <div class="mt-4 text-xl font-semibold">Результат: {score} из 4</div>
  <div class="mt-4 text-xl font-semibold">Оценка: {grade}</div>
  <button class="sendbutton mt-4 rounded-xl bg-yellow-600 px-4 py-2 text-xl font-semibold hover:cursor-pointer hover:bg-yellow-700 active:bg-yellow-800" on:click={appendValues}>Отправить на почту</button>
</div>
