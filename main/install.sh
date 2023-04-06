#!/usr/bin/env bash
# vim: set noexpandtab tabstop=2:

source trapdebug
source "$(conda info --base)/etc/profile.d/conda.sh"
conda activate cellxgene_HumanRetinaAtlas
cd ..
make clean
make pydist
pip install dist/*.gz
