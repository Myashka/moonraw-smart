export const tree = [
  {
    routeLink: 'intro',
    label: 'ВВЕДЕНИЕ',
    children: []
  },
  {
    routeLink: 'oglav',
    label: 'ОГЛАВЛЕНИЕ',
    children: []
  },
  {
    routeLink: 'part1',
    label: 'ОБЩАЯ ТАКТИКА. ЧАСТЬ 1.',
    children: [
      {
        routeLink: 'chapter1',
        label: 'ГЛАВА 1. «Вооруженные Силы Российской Федерации»',
        children: [
          {
            routeLink: 'question11',
            label: '1.1 Назначение, состав, организационная структура Вооружённых Сил Российской Федерации'
          },
          {
            routeLink: 'question12',
            label: '1.2 Назначение, состав, организационная структура, вооружение видов и родов войск Вооружённых Сил Российской Федерации'
          },
          {
            routeLink: 'test1',
            label: '1.3 Тест'
          }
        ]
      },
      {
        routeLink: 'chapter2',
        label: 'ГЛАВА 2. «Основные тактические подразделения СВ ВС РФ»',
        children: [
          {
            routeLink: 'question21',
            label: '2.1 Назначение, состав, организационная структура, вооружение мотострелкового (танкового) батальона, артиллерийского дивизиона СВ ВС РФ'
          },
          {
            routeLink: 'question22',
            label: '2.2 Назначение, состав, организационная структура мотострелковой (танковой) роты, артиллерийской (минометной батареи)'
          }
        ]
      },
      {
        routeLink: 'chapter3',
        label: 'ГЛАВА 3. «Вооруженные силы зарубежных государств»',
        children: [
          {
            routeLink: 'question31',
            label: '3.1 Характеристика вооружённых сил вероятного противника. Взгляды командования вооружённых сил вероятного противника на боевое применение мотопехотных подразделений в различных видах боевых действий'
          },
          {
            routeLink: 'question32',
            label: '3.2 Назначение, структура и задачи, решаемые мотопехотным батальоном вооружённых сил вероятного противника, его основное вооружение'
          },
          {
            routeLink: 'question33',
            label: '3.3 Вооруженные силы зарубежных государств'
          }
        ]
      },
      {
        routeLink: 'chapter4',
        label: 'ГЛАВА 4. «Общевойсковой бой, способы его ведения и средства вооруженной борьбы»',
        children: [
          {
            routeLink: 'question41',
            label: '4.1 Бой как понятие, его составляющие (удар, огонь, маневр)'
          },
          {
            routeLink: 'question42',
            label: '4.2 Общие обязанности военнослужащего в бою'
          },
          {
            routeLink: 'question43',
            label: '4.3 Нормы Международного гуманитарного права'
          }
        ]
      },
      {
        routeLink: 'chapter5',
        label: 'ГЛАВА 5. «Основы управления в бою»',
        children: [
          {
            routeLink: 'question51',
            label: '5.1 Сигналы управления и оповещения, применяемые при подготовке и в ходе боя, порядок их подачи различными способами'
          },
          {
            routeLink: 'question52',
            label: '5.2 Тренировка в выполнении сигналов и команд, подаваемых днем и ночью'
          }
        ]
      },
      {
        routeLink: 'chapter6',
        label: 'ГЛАВА 6. «Подготовка обороны»',
        children: [
          {
            routeLink: 'question61',
            label: '6.1 Выбор места для стрельбы с учетом маскирующих и защитных свойств местности, а также местных предметов; его оборудование и маскировка'
          },
          {
            routeLink: 'question62',
            label: '6.2 Подготовка к ведению огня днем (ночью): изучение местности; определение расстояний до ориентиров; закрытых (не поражаемых) участков местности и вероятных путей движения противника'
          },
          {
            routeLink: 'question63',
            label: '6.3 Наблюдение за противником и местностью днем (ночью), доклад командиру о результатах наблюдения.'
          }
        ]
      },
      {
        routeLink: 'chapter7',
        label: 'ГЛАВА 7. «Действия при отражении атаки противника»',
        children: [
          {
            routeLink: 'question71',
            label: '7.1 Действия солдата во время огневой подготовки наступления противника, с получением сигнала о непосредственной угрозе применения противником оружия массового поражения'
          },
          {
            routeLink: 'question72',
            label: '7.2 Ведение огня по противнику по мере его подхода к переднему краю обороны, смена места для стрельбы'
          },
          {
            routeLink: 'question73',
            label: '7.3 Борьба с танками противника при преодолении заграждений и непосредственно перед позицией. Уничтожение противника перед позицией и при бое в траншее, взаимное прикрытие огнем в ходе боя, само- и взаимопомощь при ранении.'
          }
        ]
      },
      {
        routeLink: 'chapter8',
        label: 'ГЛАВА 8. «Способы и приемы передвижения солдата в бою при действиях в пешем порядке»',
        children: [
          {
            routeLink: 'question81',
            label: '8.1 Приемы и способы передвижения на поле боя (ускоренным шагом, бегом, перебежками и переползанием), их применение в зависимости от интенсивности огня противника и рельефа местности'
          },
          {
            routeLink: 'question82',
            label: '8.2 Сочетание огня с движением, использование местных предметов и укрытий в ходе передвижения для наблюдения и ведения огня. Наблюдение за противником и местностью в ходе передвижения, доклад командиру о результатах наблюдения'
          }
        ]
      },
      {
        routeLink: 'chapter9',
        label: 'ГЛАВА 9. «Действия при подготовке и ведении наступления из положения непосредственного соприкосновения с противником»',
        children: [
          {
            routeLink: 'question91',
            label: '9.1 Подготовка к наступлению: пополнение боеприпасов, подготовка снаряжения, заряжание оружия, снаряжение гранат, выбор пути движения в атаку'
          },
          {
            routeLink: 'question92',
            label: '9.2 Выход из траншеи и сближение с противником. Ведение огня на ходу. Преодоление минного поля (инженерных заграждений) и продолжение атаки, наблюдение за сигналами командира и действия по ним'
          },
          {
            routeLink: 'question93',
            label: '9.3 Уничтожение противника в траншее и ходах сообщений, взаимное прикрытие огнем в ходе боя.'
          }
        ]
      },
      {
        routeLink: 'chapter10',
        label: 'ГЛАВА 10. «Действия при наступлении с выдвижением из глубины»',
        children: [
          {
            routeLink: 'question101',
            label: '10.1 Размещение личного состава в боевой машине (десантом на танке), занятие места в БМП (БТР, МТ-ЛБ). Выдвижение к рубежу перехода в атаку, подготовка оружия к спешиванию, спешивание'
          },
          {
            routeLink: 'question102',
            label: '10.2 Преодоление минного поля (инженерных заграждений), ведение огня на ходу, атака переднего края обороны и уничтожение противника в первой траншее гранатами, огнем в упор и в рукопашном бою'
          },
          {
            routeLink: 'question103',
            label: '10.3 Действия при пленении противника'
          }
        ]
      }
    ]
  },
  {
    routeLink: 'part2',
    label: 'ОБЩАЯ ТАКТИКА. ЧАСТЬ 2.',
    children: [
      {
        routeLink: 'chapter11',
        label: 'ГЛАВА 11. «Работа командира при организации обороны»',
        children: [
          {
            routeLink: 'question_11_1',
            label: '11.1 Последовательность и содержание работы командира отделения после получения задачи'
          },
          {
            routeLink: 'question_11_2',
            label: '11.2 Управление отделением во время огневой подготовки противника, уничтожение мелких групп'
          },
          {
            routeLink: 'question_11_3',
            label: '11.3 Отражение нападения воздушного противника'
          },
          {
            routeLink: 'test1',
            label: '11.4 Тест'
          }
        ]
      },
      {
        routeLink: 'chapter12',
        label: 'ГЛАВА 12. «Основные тактические подразделения СВ ВС РФ»',
        children: [
          {
            routeLink: 'question21',
            label: '12.1 Назначение, состав, организационная структура, вооружение мотострелкового (танкового) батальона, артиллерийского дивизиона СВ ВС РФ'
          },
          {
            routeLink: 'question22',
            label: '12.2 Назначение, состав, организационная структура мотострелковой (танковой) роты, артиллерийской (минометной батареи)'
          }
        ]
      },
      {
        routeLink: 'chapter13',
        label: 'ГЛАВА 13. «Вооруженные силы зарубежных государств»',
        children: [
          {
            routeLink: '',
            label: '13.1 Характеристика вооружённых сил вероятного противника. Взгляды командования вооружённых сил вероятного противника на боевое применение мотопехотных подразделений в различных видах боевых действий'
          },
          {
            routeLink: '',
            label: '13.2 Назначение, структура и задачи, решаемые мотопехотным батальоном вооружённых сил вероятного противника, его основное вооружение'
          },
          {
            routeLink: '',
            label: '13.3 Вооруженные силы зарубежных государств'
          }
        ]
      },
      {
        routeLink: 'chapter14',
        label: 'ГЛАВА 14. «Общевойсковой бой, способы его ведения и средства вооруженной борьбы»',
        children: [
          {
            routeLink: '',
            label: '14.1 Бой как понятие, его составляющие (удар, огонь, маневр)'
          },
          {
            routeLink: '',
            label: '14.2 Общие обязанности военнослужащего в бою'
          },
          {
            routeLink: '',
            label: '14.3 Нормы Международного гуманитарного права'
          }
        ]
      },
      {
        routeLink: 'chapter15',
        label: 'ГЛАВА 15. «Основы управления в бою»',
        children: [
          {
            routeLink: '',
            label: '15.1 Сигналы управления и оповещения, применяемые при подготовке и в ходе боя, порядок их подачи различными способами'
          },
          {
            routeLink: '',
            label: '15.2 Тренировка в выполнении сигналов и команд, подаваемых днем и ночью'
          }
        ]
      },
      {
        routeLink: 'chapter16',
        label: 'ГЛАВА 16. «Подготовка обороны»',
        children: [
          {
            routeLink: '',
            label: '16.1 Выбор места для стрельбы с учетом маскирующих и защитных свойств местности, а также местных предметов; его оборудование и маскировка'
          },
          {
            routeLink: '',
            label: '16.2 Подготовка к ведению огня днем (ночью): изучение местности; определение расстояний до ориентиров; закрытых (не поражаемых) участков местности и вероятных путей движения противника'
          },
          {
            routeLink: '',
            label: '16.3 Наблюдение за противником и местностью днем (ночью), доклад командиру о результатах наблюдения.'
          }
        ]
      }
    ]
  }
];
