#!/usr/bin/env bash
# vim: set noexpandtab tabstop=2:

source trapdebug
source "$(conda info --base)/etc/profile.d/conda.sh"
conda init && conda activate cellxgene_humandevretina
make clean
make pydist
pip install dist/*.gz
