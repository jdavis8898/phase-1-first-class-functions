function receivesAFunction(cb)
{
    return cb()+1
}

function returnsANamedFunction()
{
    return function simple()
    {
        1+1
    }
}

function returnsAnAnonymousFunction()
{
    return function()
    {
        1+1
    }
}