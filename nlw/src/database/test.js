
// nao esta sendo rodado
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db) => {
 //inserir dados
    proffyValue = {
        name: 'Felipe',
        avatar: 'https://avatars2.githubusercontent.com/u/62974488?s=460&u=a1d51f1592ecb5a6936a645bcc392a260a8d10a5&v=4',
        whatsapp:"75992685470", 
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id  virá pelo bacode dados
    }

    classSheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    //await createProffy(db, {proffyValue, classValue, classSheduleValues})

    //consulta os dados inseridos

    //todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
    
    SELECT classes. *, proffys.*
    FROM proffys
    JOIN classes ON(classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    `)
    //console.log(selectedClassesAndProffys)
    
    // o horario que a pessoa trablaha, por exemplo e das 8h ate as 18h 
    // o horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1320"
        AND class_schedule.time_to > "1320"
    `)

    //console.log(selectClassesSchedules)

})
