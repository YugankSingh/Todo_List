
var taskList = [
    {
        description: "shut the fuck up"
    },
    {
        description: 'shut the fuck down'
    }
];

module.exports.home = (req,res) => {
    return res.render('home', {
        tasks_list: taskList
    });
};