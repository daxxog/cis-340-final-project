#!/bin/bash
set -x
for controller in $(ls Data/Entities | sed 's/.cs//g'); do
    # clean build the controller, so delete it first
    rm -f Controllers/${controller}Controller.cs

    # use aspnet-codegenerator to build the controller
    dotnet-aspnet-codegenerator \
        -p ShopEasyAPI.csproj \
        controller \
        -f \
        -name ${controller}Controller \
        -m ${controller} \
        -outDir Controllers \
        -sqlite \
        --restWithNoViews \
        -async \
        -dc ShopEasyContext \
        -namespace ShopEasyAPI.Controllers \
    && \

    # require admin authorization for all generated CRUD controllers
    cat Controllers/${controller}Controller.cs | \
        sed 's/\[ApiController\]/\[ApiController\]\%    \[AuthorizeAdmin\]/' | \
        tr '%' '\n' | \
    tee Controllers/${controller}Controller.tmp.cs && \
    mv Controllers/${controller}Controller.tmp.cs \
       Controllers/${controller}Controller.cs && \

    # run some automatic code-cleanup
    jb cleanupcode Controllers/${controller}Controller.cs && \
    bat -P Controllers/${controller}Controller.cs
done
