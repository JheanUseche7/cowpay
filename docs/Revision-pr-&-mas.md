### Cómo revisar un PR

Pasarse a /main
git switch main

Revisar que no hay cambios
git status

Clonar PR
git fetch origin pull/{x}:head:revision-pr-{x}

Pasarme a revision-pr{x}
git switch revision-pr{x}

_NOTA_: {x} => numero de PR.

Una vez revisada, eliminarla
git swith main
git branch -d revison-pr-{x}

### Cómo hacer un cambio

Revisar cambios
git status

cambiar a main
git switch main

traer cambios
git pull
ó
git pull --ff-only origin main

Crear rama
git switch -c nombre-del-cambio

pasarme a esa rama
git swith nombre-del-cambio

Hacer las correciones y déspues...
git diff

Subilos
git add .
git commit -m "comentarios de los cambios"
git push -u origin nombre-de-la-rama
